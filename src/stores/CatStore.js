import createStore from "unistore";
import * as CatStates from "../states/CatStates";

export default createStore({
  state: CatStates.NORMAL
});
