const sort = require('./sortHelper');

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Brand in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortBrandName = (proBrand, order) => {
  proBrand.forEach((product) => {
    delete product.product_rating;
  });
  return sort.sort(order, proBrand, 'brand');
};
