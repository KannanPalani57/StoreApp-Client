
import { combineReducers } from "redux";
import Reducer_showData from "./Reducer_showData";

const index=combineReducers({
    Reducer_showData:Reducer_showData
})

export default index;
export type RootState = ReturnType<typeof index>
