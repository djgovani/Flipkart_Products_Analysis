const sort = require('./sortHelper');

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Discount Percentage in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortDiscountPercentage = (discountPercentage, order) => {
  discountPercentage.slice(0).forEach((product) => {
    delete product.product_rating;

    product.discount_percentage = (((product.price - product.discounted_price) / product.price) * 100).toFixed(2); // Calculate the discount in percentage (%)
    if (isNaN(product.discount_percentage)) {
      product.discount_percentage = 0;
    } else {
      product.discount_percentage = `${product.discount_percentage} %`;
    }
  });
  return sort.sorting(order, discountPercentage, 'discount_percentage');;
};
