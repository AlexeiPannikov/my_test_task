import {FetchFactory} from "~/repository/FetchFactory";
import type {FetchOptions} from "ofetch";
import type {GetPartnersResponseItem} from "~/repository/modules/partners/models/GetPartnersResponseItem";
import type {$Fetch} from "ofetch/dist/node";

export class PartnersModule extends FetchFactory {
    readonly RESOURCE = '/partners';

    static readonly PARTNERS_KEY = "partners"

    constructor(fetcher: $Fetch) {
        super(fetcher);
    }

    getPartners(
        fetchOptions?: FetchOptions<'json'>,
    ) {
        return () => this.call<GetPartnersResponseItem[]>(
            'GET',
            `${this.RESOURCE}`,
            undefined, // body
            fetchOptions
        )
    }

    async getPartnerProducts(
        products: string,
    ) {
        const fetchOptions: FetchOptions<'json'> = {
            params: {products}
        };
        return () => this.call<GetPartnersResponseItem[]>(
            'GET',
            `${this.RESOURCE}`,
            undefined, // body
            fetchOptions
        )
    }
}