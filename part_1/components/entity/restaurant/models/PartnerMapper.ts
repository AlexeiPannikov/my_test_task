import type { IGetPartnersResponse } from "~/server/api/partners/index.get";
import type { Partner } from "~/components/entity/restaurant/models/Partner";

export class PartnerMapper {
  static toDomain(dto: IGetPartnersResponse) {
    const partner: Partner = {
      ...dto,
    };
    return partner;
  }
}
