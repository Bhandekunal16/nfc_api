export const url = (name) => {
  return {
    location: `https://mybusiness.googleapis.com/v4/name=${name}/locations`,
  };
};
