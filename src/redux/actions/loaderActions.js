export const LOADER_ON = "@loader/on";
export const LOADER_OFF = "@loader/off";

export const loaderOn = () => ({
  type: LOADER_ON,
});

export const loaderOff = () => ({
  type: LOADER_OFF,
});
