let Table = require('cli-table');

//Show Product Details with Discount Persentage
exports.productDetailsPr = (products) => {
let toRecord = parseInt(process.argv[2], 0);
let fromRecord = parseInt(process.argv[3], 0);
let rc = fromRecord - toRecord; //Count record which will display
let pr = 0; //count recod which having discount persentage
  if (products.length > 0) {

    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price', 'Discount %'],
      colWidths: [25, 65, 70, 10, 20, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
        let discountPer =parseInt((((product.price - product.discounted_price)/product.price)*100).toFixed(2));
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, product.discountPer + ' %']);
      });
    } else {
      products.slice(toRecord, fromRecord).forEach((product) => {
        let discountPer =parseInt((((product.price - product.discounted_price)/product.price)*100).toFixed(2));
        if (isNaN(discountPer)) {
          //Checking isNan or not
        } else {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, discountPer + ' %']);
          pr++;
        }
      });
      console.log('Displaying ' +pr + ' Recods having discount % out of ' +rc + ' records'+' out of ' + products.length);
    }
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};

// Show Product Details
exports.productDetails = (products) => {
let toRecord = parseInt(process.argv[2], 0);
let fromRecord = parseInt(process.argv[3], 0);
let rc = fromRecord - toRecord; //Count record which will display
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price'],
      colWidths: [25, 65, 70, 10, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
      });
    } else {
      products.slice(toRecord, fromRecord).forEach((product) => {
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
      });
      console.log('Displaying ' +rc + ' records'+' out of ' + products.length);
    }
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};