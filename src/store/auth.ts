import { defineStore } from "pinia";
import { authApi } from "../api/auth/authApi";
import router from "@/router/index.js";
import type { IUser } from "../types/userTypes";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    verified: {} as IUser,
    loading: false,
    error: null,
    profile: null,
    image: null,
    update: null,
  }),
  getters: {},
  actions: {
    async sendOtp(payload: any) {
      try {
        this.loading = true;
        const data = await authApi.sendOtp(payload);
        this.user = JSON.parse(JSON.stringify(data));
        // if (data?.tokens?.access_token) {
        //   localStorage.setItem("token", data?.tokens?.access_token);
        //   // localStorage.setItem("role", data?.user?.role);
        // }
        // if (this.user?.user?.role === "admin") {
        // }
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async verify(payload: any) {
      try {
        this.loading = true;
        const data = await authApi.verify(payload);
        this.verified = JSON.parse(JSON.stringify(data));
        if (data?.tokens?.access_token) {
          localStorage.setItem("token", data?.tokens?.access_token);
        }
        console.log(typeof this.verified.status);
        if (this.verified.status == 1) {
          router.push({ path: "/" });
        }
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async login(payload: any) {
      try {
        this.loading = true;
        const data = await authApi.login(payload);
        this.user = JSON.parse(JSON.stringify(data));
        if (data?.tokens?.access_token) {
          localStorage.setItem("token", data.tokens.access_token);
          localStorage.setItem("role", data?.user?.role);
        }
        // if (this.user?.user?.role === "admin") {
        router.push({ path: "/" });
        // }
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async getProfile() {
      try {
        this.loading = true;
        const profile = await authApi.getProfile();
        this.profile = profile;
        console.log(profile);
        return profile;
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async updateImage(payload) {
      try {
        console.log("payload", payload);
        let res = await authApi.updateImage(payload);
        this.image = res.image;
        return res.image;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProfile(payload) {
      try {
        let res = await authApi.updateProfile(payload);
        this.profile = res.updated;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
