let csv = require('fast-csv');
let assert = require('assert');
let fs = require('fs');
let print = require('./DataPrinter');
let filePath = './Product_Data/data.csv';

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |   Table in ascending order of prodcuct rating |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortProRate = (proRate) => {
  console.log('Table in ascending order of product_rating');
  let byProRate = proRate.slice(0);
  byProRate.sort((pr1, pr2) => {
    return pr1.product_rating < pr2.product_rating ? -1 : pr1.product_rating > pr2.product_rating ? 1 : 0;
  });

  // print with the product_rating
  print.productRatingDetails(byProRate);
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |  Table in descending order of prodcuct rating |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortProRateR = (proRate) => {
  console.log('Table in descending order of product_rating');
  let byProRate = proRate.slice(0);
  byProRate.sort((pr1, pr2) => {
    return pr1.product_rating > pr2.product_rating ? -1 : pr1.product_rating < pr2.product_rating ? 1 : 0;
  });

  // print with the product_rating
  print.productRatingDetails(byProRate);
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |      Table in ascending order of Brand        |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortBrandName = (proBrand) => {
  let byBrandName = proBrand.slice(0);
  byBrandName.sort((br1, br2) => {
    return br1.brand.toLowerCase() < br2.brand.toLowerCase() ? -1 : br1.brand.toLowerCase() > br2.brand.toLowerCase() ? 1 : 0;
  });
  if (process.argv[2] === '5') {
    sortProRate(byBrandName);
  } else {
    console.log('Table in ascending order of Brand');
    // print without the discount percentage
    print.productDetails(byBrandName);
  }
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |      Table in descending order of Brand       |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortBrandNameR = (proBrand) => {
  let byBrandName = proBrand.slice(0);
  byBrandName.sort((br1, br2) => {
    return br1.brand.toLowerCase() > br2.brand.toLowerCase() ? -1 : br1.brand.toLowerCase() < br2.brand.toLowerCase() ? 1 : 0;
  });

  if (process.argv[2] === '6') {
    sortProRateR(byBrandName);
  } else {
    console.log('Table in descending order of Brand');
    // print without the discount percentage
    print.productDetails(byBrandName);
  }
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |   Table in ascending order of discount(in %)  |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
 const sortDisPer = (dispr) => {
  console.log('Table in ascending order of discount(in %)');
  let byDisPer = dispr.slice(0);
  byDisPer.sort((dp1, dp2) => {
    return dp1.discountPer < dp2.discountPer ? -1 : dp1.discountPer > dp2.discountPer ? 1 : 0;
  });

  // print with the discount percentage
  print.productDetailsPr(byDisPer);
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |  Table in descending order of discount(in %)  |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
 const sortDisPerR = (dispr) => {
  console.log('Table in descending order of discount(in %)');
  let byDisPer = dispr.slice(0);
  byDisPer.sort((dp1, dp2) => {
    return dp1.discountPer > dp2.discountPer ? -1 : dp1.discountPer < dp2.discountPer ? 1 : 0;
  });

  // print with the discount percentage
  print.productDetailsPr(byDisPer);
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |                File Parser                    |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
// exports.file = (callback) => {
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
          discountPer: (((data[7] - data[8]) / data[7]) * 100).toFixed(2),
          product_rating: data[12],
        });
      })
      .on('end', function(){
        parsedProducts.shift();
        fulfill('Its done...!!!');
      });
  });

  promise.then((message) => {
    /*
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      |  call the function by checking the arguments      |
      |  1 - Table in ascending order of Brand            |
      |  2 - Table in descending order of Brand           |
      |  3 - Table in ascending order of discount(in %)   |
      |  4 - Table in descending order of discount(in %)  |
      |  5 - Table will show the filtered products        |
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
    if (process.argv[2] === '1') {
      sortBrandName(parsedProducts);
    } else if (process.argv[2] === '2') {
      sortBrandNameR(parsedProducts);
    } else if (process.argv[2] === '3') {
      sortDisPer(parsedProducts);
    } else if (process.argv[2] === '4'){
      sortDisPerR(parsedProducts);
    } else if (process.argv[2] === '5'){
      sortBrandName(parsedProducts);
    } else if (process.argv[2] === '6'){
      sortBrandNameR(parsedProducts);
    } else if (process.argv[2] === '7'){
      print.productFilter(parsedProducts);
    } else {
      print.productDetails(parsedProducts);
    }
    // callback(null, parsedProducts);
  }).catch((err) => {
    console.log(err.message);
  });
};

fileParser(filePath);
