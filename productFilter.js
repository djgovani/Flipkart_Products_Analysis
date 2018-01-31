/* |~~~~~~~~~~~~~~~~~~~~~|
 * | Filter the products |
 * |~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productFilter = (products) => {
  products.forEach((product) => {
    delete product.discount_percentage;
    delete product.product_rating;
  });
  let filteredProducts = products.slice(0).filter((product) => {
    let splitProductCategory = product.product_category_tree.split(/\s*>>\s*/); // Split Product category using '>>'
    if ((product.discounted_price >= parseInt(process.argv[3], 0) && product.discounted_price <= parseInt(process.argv[4], 0)) && (product.brand === process.argv[5]) && ((splitProductCategory[1] === process.argv[6]) || (splitProductCategory[2] === process.argv[6]) || (splitProductCategory[3] === process.argv[6]))) {
      return product;
    } else if ((product.discounted_price >= parseInt(process.argv[3], 0) && product.discounted_price <= parseInt(process.argv[4], 0)) && (product.brand === process.argv[5])) {
      return product;
    }
  });
  return filteredProducts;
};
