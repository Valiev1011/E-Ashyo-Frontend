import axiosClient from "@/api/axios/apiClient";

export const authApi = {
  sendOtp(payload: any) {
    const url = "user/send-otp";
    return axiosClient.post(url, payload);
  },
  verify(payload: any) {
    const url = "user/verify-otp";
    return axiosClient.post(url, payload);
  },
  login(payload: any) {
    const url = "auth/login";
    return axiosClient.post(url, payload);
  },
  getProfile() {
    const url = "profile/info";
    return axiosClient.get(url);
  },
  updateImage(payload: any) {
    const url = "profile/upload-image";
    return axiosClient.post(url, payload);
  },
  updateProfile(payload: any) {
    const url = "profile/update";
    return axiosClient.put(url, payload);
  },
};
