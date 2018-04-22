import cn from "classnames";

const getWalkingClassFor = (name, state, states) =>
  cn({
    [name]: true,
    [`${name}__state--${states.NORMAL}`]: state === states.NORMAL,
    [`${name}__state--${states.WALKING_1}`]: state === states.WALKING_1,
    [`${name}__state--${states.WALKING_2}`]: state === states.WALKING_2
  });

export default getWalkingClassFor;
