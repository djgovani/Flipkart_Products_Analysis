const fs = require('fs');
const csv = require('fast-csv');
const assert = require('assert');

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |                File Parser                    |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
module.exports = (filePath) => {
  assert.ok(filePath, 'filePath is required');
  let parsedProducts = [];
  return new Promise((fulfill) =>{
    console.log('Hey, Its loading data wait for some time...!!');
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        parsedProducts.push({
          brand: data[14],
          product_name: data[4],
          product_category_tree: data[5],
          price: data[7],
          discounted_price: data[8],
          product_rating: data[12],
        });
      })
      .on('end', () => {
        parsedProducts.shift();
        fulfill(parsedProducts);
      });
  });
};
