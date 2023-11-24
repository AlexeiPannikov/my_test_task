import {defineWrappedResponseHandler} from "~/server/utils/response-handler";

export default defineWrappedResponseHandler(async () => {
    const data = await import("../../assets/db/partners.json")
    if (data) {
        return data["default"]
    }
    throw createError({
        statusCode: 500,
        statusMessage: "No data"
    })
})