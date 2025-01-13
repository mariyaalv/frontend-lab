import {
 StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from "./config/StateSchema";
import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
// по FSD импортировать с вышестоящего слоя в нижестоящие - нельзя
// исключение - типы, например StateSchema
export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
};
