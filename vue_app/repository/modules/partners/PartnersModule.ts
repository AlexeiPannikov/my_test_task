import {FetchFactory} from "~/repository/FetchFactory";
import type {AsyncDataOptions} from "#app";
import type {FetchOptions} from "ofetch";
import type {BaseResponse} from "~/repository/modules/BaseResponse";
import type {GetPartnersResponseItem} from "~/repository/modules/partners/models/GetPartnersResponseItem";

export class PartnersModule extends FetchFactory {
    private readonly RESOURCE = '/partners';

    async getPartners(
        asyncDataOptions?: AsyncDataOptions<BaseResponse<GetPartnersResponseItem[]>>
    ) {

        return useAsyncData(
            () => {
                const fetchOptions: FetchOptions<'json'> = {
                };
                return this.call<GetPartnersResponseItem[]>(
                    'GET',
                    `${this.RESOURCE}`,
                    undefined, // body
                    fetchOptions
                )
            },
            asyncDataOptions
        )
    }
}