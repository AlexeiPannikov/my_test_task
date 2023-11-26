import { IGetPartnersResponse } from "~/server/api/partners/index.get";

export interface IProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IGetProductsResponse {
  restaurant: IGetPartnersResponse;
  products: IProductModel[];
}

const sources = {
  "food-band.json": import("~/server/db/food-band.json"),
  "gusi-lebedi.json": import("~/server/db/gusi-lebedi.json"),
  "palki-skalki.json": import("~/server/db/palki-skalki.json"),
  "pizza-burger.json": import("~/server/db/pizza-burger.json"),
  "pizza-plus.json": import("~/server/db/pizza-plus.json"),
  "tanuki.json": import("~/server/db/tanuki.json"),
};

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, "products");
  const { sort, order, search_text } = getQuery(event);
  const restaurants = await import("../../db/partners.json");
  const restaurant = (restaurants.default as IGetPartnersResponse[]).find(
    (item) => item.products === fileName + ".json",
  );
  if (!restaurant) {
    throw createError({
      statusCode: 400,
      statusMessage: "Restaurant is not found",
    });
  }
  const products = await sources[restaurant.products as keyof typeof sources];
  let sortedProducts = products.default;
  if (search_text) {
    const text = search_text.toString().toLowerCase();
    sortedProducts = sortedProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(text) ||
        product.description.toLowerCase().includes(text),
    );
  }
  if (sort && order) {
    sortedProducts = sortedProducts.sort((a, b) => {
      const key = sort as keyof typeof a;
      if (order === "asc") {
        if (typeof a[key] === "number") {
          return Number(a[key]) - Number(b[key]);
        }
      }
      if (order === "desc") {
        if (typeof a[key] === "number") {
          return Number(b[key]) - Number(a[key]);
        }
      }
      return 1;
    });
  }
  const res: IGetProductsResponse = {
    restaurant,
    products: sortedProducts,
  };
  return res;
});
