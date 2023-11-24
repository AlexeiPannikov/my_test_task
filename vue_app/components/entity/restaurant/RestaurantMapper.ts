import type {GetPartnersResponseItem} from "~/repository/modules/partners/models/GetPartnersResponseItem";
import {Restaurant} from "~/components/entity/restaurant/Restaurant";

export class RestaurantMapper {
    static toDomain(dto: GetPartnersResponseItem) {
        const restaurant: Restaurant = {
            ...dto
        }
        return restaurant
    }
}