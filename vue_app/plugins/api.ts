import { $fetch, type FetchOptions } from 'ofetch';

import {PartnersModule} from '~/repository/modules/partners/PartnersModule';

export interface IApiInstance {
    partners: PartnersModule;
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const fetchOptions: FetchOptions = {
        baseURL: config.public.apiBaseUrl
    };

    const apiFetcher = $fetch.create(fetchOptions);

    const modules: IApiInstance = {
        partners: new PartnersModule(apiFetcher),
    };

    return {
        provide: {
            api: modules
        }
    };
});