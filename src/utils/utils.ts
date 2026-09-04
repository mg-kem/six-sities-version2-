export const calculateRating = (rating: number) => {
  if (rating) {
    return (100 / 5) * rating;
  }
  return 0;
};
