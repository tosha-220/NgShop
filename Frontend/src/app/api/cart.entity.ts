import {SimpleProduct} from "./simple.product";

export interface CartEntity {
  item: SimpleProduct;
  sum: number;
  quantity:number;
}
