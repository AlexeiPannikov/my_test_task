export interface IGetPartnersResponse {
  name: string;
  time_of_delivery: number;
  stars: number;
  price: 900;
  kitchen: string;
  image: string;
  products: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const json = await import("~/server/db/partners.json");
  const data = json.default as IGetPartnersResponse[];
  let filteredData = [...data];
  if ("search_text" in query) {
    const searchText = (query.search_text as string)
      .toLowerCase()
      .split(" ")
      .join();
    filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText) ||
        item.kitchen.toLowerCase().includes(searchText),
    );
  }
  return filteredData;
});
