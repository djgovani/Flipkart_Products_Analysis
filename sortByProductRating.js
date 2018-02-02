const sort = require('./sortHelper');

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Product Rating in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortProductRating = (prodctRating, order) => {
  prodctRating.forEach((product) => {
    delete product.discount_percentage;
  });

  let filterProductRating = sort.sort(order, prodctRating, 'product_rating').filter((product) => {
    if ((product.product_rating !== 'No rating available') && (product.product_rating !== 'Flat Top Buffing Foundation Brush') && (product.product_rating !== 'hrung in die Kernphysik for Rs.1805 online. Einf&uuml')) {
      return product;
    }
  });
  return filterProductRating;
};
