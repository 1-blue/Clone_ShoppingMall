export { registerAction, loginAction, logoutAction } from "./authAction";
export { newProductsAction, bestProductsAction, detailProductAction } from "./productAction";

import { RESET_MESSAGE } from "../types";
export function resetMessageAction() {
  return {
    type: RESET_MESSAGE,
  };
}
