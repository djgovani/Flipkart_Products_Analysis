let csv = require("fast-csv");
let assert = require('assert');
let fs = require('fs');
let print = require('./DataPrinter');
let filePath = './Product_Data/data.csv';

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |                File Parser                    |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
//exports.file = (callback) => {
const fileParser = (filePath) => {
  assert.ok(filePath, 'filePath is required');
  let parsedProducts = [];

  const promise = new Promise((fulfill) =>{
    console.log("Hey, Its loading data wait for some time...!!");
    fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", function(data){
      parsedProducts.push({
        brand: data[14],
        product_name: data[4],
        product_category_tree: data[5],
        price: data[7],
        discounted_price: data[8],
        discountPer: (((data[7] - data[8])/data[7])*100).toFixed(2)
      });
    })
    .on("end", function(){
      parsedProducts.shift();
      fulfill('Its done...!!!')
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
    if (process.argv[4] === '1') {
      sortBrandName(parsedProducts);
    } else if (process.argv[4] === '2') {
      sortBrandNameR(parsedProducts);
    } else if (process.argv[4] === '3') {
      sortDisPer(parsedProducts);
    } else if (process.argv[4] === '4'){
      sortDisPerR(parsedProducts);
    } else if (process.argv[4] === '5'){
      print.productFilter(parsedProducts);
    } else {
      print.productDetails(parsedProducts);
    }
    //callback(null, parsedProducts);
  }).catch((err) => {
    console.log(err.message);
  });
}

fileParser(filePath);

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |      Table in ascending order of Brand        |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortBrandName = (proBrand) => {
  console.log('Table in ascending order of Brand');
  let byBrandName = proBrand.slice(0);
  byBrandName.sort((br1, br2) => {
    return br1.brand < br2.brand ? -1 : br1.brand > br2.brand ? 1 : 0;
  });

  //print without the discount percentage
  print.productDetails(byBrandName);
}

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * |      Table in descending order of Brand       |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
const sortBrandNameR = (proBrand) => {
  console.log('Table in descending order of Brand');
  let byBrandName = proBrand.slice(0);
  byBrandName.sort((br1, br2) => {
    return br1.brand > br2.brand ? -1 : br1.brand < br2.brand ? 1 : 0;
  });

  //print without the discount percentage
  print.productDetails(byBrandName);
}

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

  //print with the discount percentage
  print.productDetailsPr(byDisPer);
}

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

  //print with the discount percentage
  print.productDetailsPr(byDisPer);
}
