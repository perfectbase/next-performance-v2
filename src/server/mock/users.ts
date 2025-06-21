export type Role = "admin" | "user";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: Role;
  password: string;
};

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin",
    username: "admin",
    email: "admin@example.com",
    role: "admin",
    password: "admin",
  },
  {
    id: "2",
    name: "User",
    username: "user",
    email: "user@example.com",
    role: "user",
    password: "user",
  },
];
