/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Brand in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sortBrandName = (proBrand, order) => {

  let byBrandName = proBrand.slice(0);
  byBrandName.sort((br1, br2) => {
    if (order === 1) {
      return br1.brand.toLowerCase() < br2.brand.toLowerCase() ? -1 : br1.brand.toLowerCase() > br2.brand.toLowerCase() ? 1 : 0;
    } else if (order === 2) {
      return br1.brand.toLowerCase() > br2.brand.toLowerCase() ? -1 : br1.brand.toLowerCase() < br2.brand.toLowerCase() ? 1 : 0;
    }
  });

  byBrandName.forEach((product) => {
    delete product.discount_percentage;
    delete product.product_rating;
  });
  return byBrandName;
};
