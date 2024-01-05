import { TCreateAccountInputProps } from "../../interface";

export const createAccountInputs: TCreateAccountInputProps[] = [
  {
    type: "text",
    name: "displayName",
    id: "name",
    label: "Username",
  },
  {
    type: "email",
    name: "email",
    id: "userEmail",
    label: "Email",
  },
  {
    type: "password",
    name: "password",
    id: "userPassword",
    label: "Password",
  },
];
