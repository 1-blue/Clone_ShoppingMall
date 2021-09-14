export { registerAction, loginAction, logoutAction } from "./authAction";
export {
  exitProductDatailPageAction,
  newProductsAction,
  bestProductsAction,
  detailProductAction,
} from "./productAction";
export { myCartAction, addCartAction, deleteCartAction } from "./cartAction";

import { RESET_MESSAGE } from "../types";
export function resetMessageAction() {
  return {
    type: RESET_MESSAGE,
  };
}
