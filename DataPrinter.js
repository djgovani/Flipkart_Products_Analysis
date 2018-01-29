let Table = require('cli-table');

let toRecord = parseInt(process.argv[2], 0);
let fromRecord = parseInt(process.argv[3], 0);
let rc = fromRecord - toRecord; //Count record which will display

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Show Product Details with Discount Percentage |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productDetailsPr = (products) => {
let pr = 0; //count recod which having discount percentage
  if (products.length > 0) {

    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price', 'Discount %'],
      colWidths: [25, 65, 70, 10, 20, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
        let discountPer =((((product.price - product.discounted_price)/product.price)*100).toFixed(2));
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, discountPer + ' %']);
      });
    } else {
      products.slice(toRecord, fromRecord).forEach((product) => {
        let discountPer =((((product.price - product.discounted_price)/product.price)*100).toFixed(2));
        if (isNaN(discountPer)) {
          //Checking isNan or not
        } else {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, discountPer + ' %']);
          pr++;
        }
      });
      console.log('Displaying ' +pr + ' Records having discount % out of ' +rc + ' records'+' out of ' + products.length);
    }
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Show Product Details without Discount percentage |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productDetails = (products) => {
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price'],
      colWidths: [25, 65, 70, 10, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
      });
    } else if (fromRecord) {
      products.slice(toRecord, fromRecord).forEach((product) => {
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
      });
      console.log('Displaying ' +rc + ' records'+' out of ' + products.length);
    } else {
      products.forEach((product) => {
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
      });
    }
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Show Product Details with filteration            |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productFilter = (products) => {
let filteredRc = 0;
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price'],
      colWidths: [25, 65, 70, 10, 20],
    });

    //products.slice(toRecord, fromRecord).forEach((product) => {
      products.forEach((product) => {
      /* process.argv[5] have minPrice
       * process.argv[6] have maxPrice
       * process.argv[7] have the Brand name
      */
      if ((product.price >= parseInt(process.argv[3], 0) && product.price <= parseInt(process.argv[4], 0)) && (product.brand == process.argv[5])) {
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
        filteredRc++;
      }
    });

    console.log('Displaying ' +filteredRc + ' records'+' out of ' + products.length);
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
}
