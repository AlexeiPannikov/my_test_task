import type { Product } from "~/components/entity/product/models/Product";
import type { IProductModel } from "~/server/api/partners/[products]";

export class ProductsMapper {
  static toDomain(dto: IProductModel) {
    const product: Product = {
      ...dto,
    };
    return product;
  }
}
