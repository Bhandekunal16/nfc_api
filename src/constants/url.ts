export const url = (name) => {
  return {
    location: `https://mybusiness.googleapis.com/v4/${name}/locations`,
    getAllReview: `https://mybusiness.googleapis.com/v4/${name}/locations/reviews/`,
    getAllReviewOwner: `https://mybusiness.googleapis.com/v4/${name}/locations/reviews/`,
    createBusiness: `mybusinessaccountmanagement.googleapis.com/v1/accounts`,
    getInfo: `https://mybusinessaccountmanagement.googleapis.com/v1/accounts/${name}`,
  };
};
