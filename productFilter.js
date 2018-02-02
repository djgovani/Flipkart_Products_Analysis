/* |~~~~~~~~~~~~~~~~~~~~~|
 * | Filter the products |
 * |~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productFilter = (products, minDiscountPrice, maxDiscountPrice, brand, category) => {
  products.forEach((product) => {
    delete product.discount_percentage;
    delete product.product_rating;
  });
  let filteredProducts = products.slice(0).filter((product) => {
    let splitProductCategory = product.product_category_tree.split(/\s*>>\s*/); // Split Product category using '>>'
    if ((product.discounted_price >= minDiscountPrice && product.discounted_price <= maxDiscountPrice) && (product.brand === brand) && ((splitProductCategory[1] === category) || (splitProductCategory[2] === category) || (splitProductCategory[3] === category))) {
      return product;
    } else if ((product.discounted_price >= minDiscountPrice && product.discounted_price <= maxDiscountPrice) && (product.brand === brand)) {
      return product;
    }
  });
  return filteredProducts;
};
