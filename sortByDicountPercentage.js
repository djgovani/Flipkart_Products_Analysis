/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Discount Percentage in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortDiscountPercentage = (dispr) => {
  dispr.forEach((product) => {
    delete product.product_rating;
    if (isNaN(product.discount_percentage)) {
      product.discount_percentage = 0;
    } else {
      product.discount_percentage = `${product.discount_percentage} %`;
    }
  });

  let byDiscountPercentage = dispr.slice(0);
  byDiscountPercentage.sort((dp1, dp2) => {
    if (process.argv[2] === '3') {
      return dp1.discount_percentage < dp2.discount_percentage ? -1 : dp1.discount_percentage > dp2.discount_percentage ? 1 : 0;
    } else if (process.argv[2] === '4') {
      return dp1.discount_percentage > dp2.discount_percentage ? -1 : dp1.discount_percentage < dp2.discount_percentage ? 1 : 0;
    }
  });
  return byDiscountPercentage;
};
