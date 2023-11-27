import type { IApiInstance } from "~/plugins/api";

declare module "#app" {
  interface NuxtApp {
    $api: IApiInstance;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $api: IApiInstance;
  }
}

export {};
