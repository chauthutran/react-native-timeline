import { JSONObject } from "./definations";

// types.ts
export type RootStackParamList = {
    HomePage: undefined; // HomePage does not need any parameters
    TimelinePage: { filterData: JSONObject }; // Timeline expects filterData parameter
};