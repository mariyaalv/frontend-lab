import { StateSchema } from "app/providers/StoreProvider";

// нарушение FSD
export const getCounter = (state: StateSchema) => state.counter;
