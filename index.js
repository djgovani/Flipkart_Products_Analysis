const csv = require('fast-csv');
const assert = require('assert');
const fs = require('fs');
const print = require('./DataPrinter');
const sortByBrand = require('./sortByBrand');
const sortByDiscountPercentage = require('./sortByDicountPercentage');
const sortByProductRating = require('./sortByProductRating');
const productFilter = require('./productFilter');
const filePath = './Product_Data/data.csv';

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |                File Parser                    |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const fileParser = () => {
  assert.ok(filePath, 'filePath is required');
  let parsedProducts = [];
  const promise = new Promise((fulfill) =>{
    console.log('Hey, Its loading data wait for some time...!!');
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', function(data){
        parsedProducts.push({
          brand: data[14],
          product_name: data[4],
          product_category_tree: data[5],
          price: data[7],
          discounted_price: data[8],
          discount_percentage: (((data[7] - data[8]) / data[7]) * 100).toFixed(2),
          product_rating: data[12],
        });
      })
      .on('end', function(){
        parsedProducts.shift();
        fulfill('Its done...!!!');
      });
  });

  promise.then(() => {
    /*
      |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
      |  call the function by checking the arguments      |
      |  1 - Table in ascending order of Brand            |
      |  2 - Table in descending order of Brand           |
      |  3 - Table in ascending order of discount(in %)   |
      |  4 - Table in descending order of discount(in %)  |
      |  5 - Table in ascending order of product rating   |
      |  6 - Table in descending order of product rating  |
      |  7 - Table will show the filtered products        |
      |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    */
    if (process.argv[2] === '1') {
      print.showProducts(sortByBrand.sortBrandName(parsedProducts));
    } else if (process.argv[2] === '2') {
      print.showProducts(sortByBrand.sortBrandName(parsedProducts));
    } else if (process.argv[2] === '3') {
      print.showProducts(sortByDiscountPercentage.sortDiscountPercentage(parsedProducts));
    } else if (process.argv[2] === '4'){
      print.showProducts(sortByDiscountPercentage.sortDiscountPercentage(parsedProducts));
    } else if (process.argv[2] === '5'){
      print.showProducts(sortByProductRating.sortProductRating(parsedProducts));
    } else if (process.argv[2] === '6'){
      print.showProducts(sortByProductRating.sortProductRating(parsedProducts));
    } else if (process.argv[2] === '7'){
      print.showProducts(productFilter.productFilter(parsedProducts));
    } else {
      print.productDetails(parsedProducts);
    }
  }).catch((err) => {
    console.log(err.message);
  });
};

fileParser(filePath);
