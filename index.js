const parser = require('./parser');

const print = require('./DataPrinter');

const sortByBrand = require('./sortByBrand');
const sortByDiscountPercentage = require('./sortByDicountPercentage');
const sortByProductRating = require('./sortByProductRating');
const productFilter = require('./productFilter');

const filePath = './Product_Data/data.csv';

parser(filePath).then((parsedProducts) => {
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
    print.showProducts(sortByBrand.sortBrandName(parsedProducts,1));
  } else if (process.argv[2] === '2') {
    print.showProducts(sortByBrand.sortBrandName(parsedProducts,2));
  } else if (process.argv[2] === '3') {
    print.showProducts(sortByDiscountPercentage.sortDiscountPercentage(parsedProducts,3)); // 3 for ascending order
  } else if (process.argv[2] === '4'){
    print.showProducts(sortByDiscountPercentage.sortDiscountPercentage(parsedProducts,4)); // 4 for descending order
  } else if (process.argv[2] === '5'){
    print.showProducts(sortByProductRating.sortProductRating(parsedProducts,3)); // 3 for ascending order
  } else if (process.argv[2] === '6'){
    print.showProducts(sortByProductRating.sortProductRating(parsedProducts,4)); // 4 for descending order
  } else if (process.argv[2] === '7'){
    print.showProducts(productFilter.productFilter(parsedProducts, parseInt(process.argv[3]), parseInt(process.argv[4]), process.argv[5], process.argv[6]));
  } else {
    print.showProducts(parsedProducts);
  }
}).catch((err) => {
  console.log(err.message);
});
