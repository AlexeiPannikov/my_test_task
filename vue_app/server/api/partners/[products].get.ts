import {defineWrappedResponseHandler} from "~/server/utils/response-handler";

const sources = {
    "food-band.json": import("~/server/db/food-band.json"),
    "gusi-lebedi.json": import("~/server/db/gusi-lebedi.json"),
    "palki-skalki.json": import("~/server/db/palki-skalki.json"),
    "pizza-burger.json": import("~/server/db/pizza-burger.json"),
    "pizza-plus.json": import("~/server/db/pizza-plus.json"),
    "tanuki.json": import("~/server/db/tanuki.json"),
}

export default defineWrappedResponseHandler(async (event) => {
    const product = getRouterParam(event, "products") as keyof typeof sources
    return await sources[product]
})