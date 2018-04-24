import * as CatStates from "../states/CatStates";

export default store => ({
  lick: () => ({ state: CatStates.LICKING }),
  walk: () => ({ state: CatStates.WALKING }),
  stop: () => ({ state: CatStates.NORMAL }),
  jump(prevState) {
    store.setState({ state: CatStates.JUMPING });
    setTimeout(() => {
      const wasJumping = prevState.state === CatStates.JUMPING;
      const newState = wasJumping ? { state: CatStates.NORMAL } : prevState;
      store.setState(newState);
    }, 1000);
  }
});
