import {Product} from "./product.model";

export interface Cart {
  item: Product;
  sum: number;
  quantity: number;
}
