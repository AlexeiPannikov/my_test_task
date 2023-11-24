import {type $Fetch, type FetchOptions} from "ofetch";
import type {BaseResponse} from "~/repository/modules/BaseResponse";

export class FetchFactory {
    private readonly fetch: $Fetch;

    constructor(fetcher: $Fetch) {
        this.fetch = fetcher
    }

    async call<T>(
        method: string,
        url: string,
        data?: object,
        fetchOptions?: FetchOptions<'json'>
    ): Promise<BaseResponse<T>> {
        return this.fetch<BaseResponse<T>>(
            url,
            {
                method,
                body: data,
                ...fetchOptions
            }
        )
    }
}