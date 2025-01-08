import { StateSchema } from "./config/StateSchema";
import { createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

// по FSD импортировать с вышестоящего слоя в нижестоящие - нельзя
// исключение - типы, например StateSchema
export { StoreProvider, createReduxStore, StateSchema };
