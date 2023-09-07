export class UserModel {
  id: string;
  username: string;
  avatar: string;
  tokens: Record<string, string>[];
  settings: Record<string, string>[];
  login: string;
  password: string;
}
