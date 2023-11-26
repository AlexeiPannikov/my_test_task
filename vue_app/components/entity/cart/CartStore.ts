import type { Product } from "~/components/entity/product/models/Product";

export interface IOrder {
  product: Product;
  count: number;
}

export interface ICart {
  orders: IOrder[];
}

const defaultValue: ICart = {
  orders: [],
};

export const useCartStore = () => useState("cart", () => defaultValue);
