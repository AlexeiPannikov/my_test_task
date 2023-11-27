import { type User } from "~/components/entity/user/User";

const defaultValue: User = null;

export const useUserStore = () =>
  useState<typeof defaultValue>("user", () => defaultValue);
