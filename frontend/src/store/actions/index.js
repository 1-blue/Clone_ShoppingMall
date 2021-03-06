export { loadToMeAction, registerAction, loginAction, logoutAction } from "./authAction";
export {
  exitProductDatailPageAction,
  loadMainImageAction,
  allProductsAction,
  newProductsAction,
  bestProductsAction,
  detailProductAction,
} from "./productAction";
export { myCartAction, addCartAction, deleteCartAction, ChangeCartAction } from "./cartAction";

import { RESET_MESSAGE } from "../types";
export function resetMessageAction() {
  return {
    type: RESET_MESSAGE,
  };
}
