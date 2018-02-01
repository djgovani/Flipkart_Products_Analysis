/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Product Rating in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortProductRating = (prodctRating, order) => {
  prodctRating.forEach((product) => {
    delete product.discount_percentage;
  });

  let byProductRating = prodctRating.slice(0);
  byProductRating.sort((pr1, pr2) => {
    if (order === 5) {
      return pr1.product_rating < pr2.product_rating ? -1 : pr1.product_rating > pr2.product_rating ? 1 : 0;
    } else if (order === 6) {
      return pr1.product_rating > pr2.product_rating ? -1 : pr1.product_rating < pr2.product_rating ? 1 : 0;
    }
  });
  let filterProductRating = byProductRating.filter((product) => {
    if ((product.product_rating !== 'No rating available') && (product.product_rating !== 'Flat Top Buffing Foundation Brush') && (product.product_rating !== 'hrung in die Kernphysik for Rs.1805 online. Einf&uuml')) {
      return product;
    }
  });
  return filterProductRating;
};
