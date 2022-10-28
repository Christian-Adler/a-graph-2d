export const state = {
  x: 0,
};

export const updateState = (progress, ctxData) => {
  state.x += progress;
  if (state.x > ctxData.WIDTH)
    state.x = 0;
};
