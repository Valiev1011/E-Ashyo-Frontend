export interface IUser {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    is_active: boolean;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
  role: string;
  status: number;
}
