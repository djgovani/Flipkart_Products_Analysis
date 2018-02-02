/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Sort the Product item in ascending and descending order |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.sorting = (order, product, item) => {
  product.sort((br1, br2) => {
    switch (order){
      case 1: return br1[item].toLowerCase() < br2[item].toLowerCase() ? -1 : br1[item].toLowerCase() > br2[item].toLowerCase() ? 1 : 0;
        break;

      case 2: return br1[item].toLowerCase() > br2[item].toLowerCase() ? -1 : br1[item].toLowerCase() < br2[item].toLowerCase() ? 1 : 0;
        break;

      case 3: return br1[item] < br2[item] ? -1 : br1[item] > br2[item] ? 1 : 0;
        break;

      case 4: return br1[item] > br2[item] ? -1 : br1[item] < br2[item] ? 1 : 0;
        break;

      default:
        break;
    }
  });
  return product;
};
