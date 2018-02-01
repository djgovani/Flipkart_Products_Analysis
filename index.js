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
