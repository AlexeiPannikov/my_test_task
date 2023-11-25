import {defineWrappedResponseHandler} from "~/server/utils/response-handler";

export default defineWrappedResponseHandler(async (event) => {
    const query = getQuery(event)
    console.log(query)
    const json = await import("~/server/db/partners.json")
    const data = json["default"]
    let filteredData: typeof data = [...data]
    if (("search_text" in query)) {
        const search_text = (query.search_text as string).toLowerCase().split(" ").join()
        filteredData = data
            .filter(item => (
                item.name.toLowerCase().includes(search_text)
                || item.kitchen.toLowerCase().includes(search_text)
            ))
    }
    return filteredData
})