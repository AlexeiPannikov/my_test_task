import type { UserModel } from "~/repository/modules/auth/models/UserModel";
import type { User } from "~/components/entity/user/User";

export class UserMapper {
  static toDomain(dto: UserModel) {
    const user: User = {
      name: dto.name,
    };
    return user;
  }
}
