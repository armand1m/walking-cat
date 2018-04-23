import * as CatStates from "../states/CatStates";

export default store => ({
  lick: () => ({ state: CatStates.LICKING }),
  walk: () => ({ state: CatStates.WALKING }),
  stop: () => ({ state: CatStates.NORMAL }),
  jump(prevState) {
    store.setState({ state: CatStates.JUMPING });
    setTimeout(() => store.setState(prevState), 1000);
  }
});
