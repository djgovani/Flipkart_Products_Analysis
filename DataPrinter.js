let Table = require('cli-table');

let toRecord = parseInt(process.argv[3], 0);
let fromRecord = parseInt(process.argv[4], 0);
let totalRC = fromRecord - toRecord; // Count Total record which will display
let rc = 0; // Record counter

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Show Product Details with Discount Percentage |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productDetailsPr = (products) => {
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price', 'Discount %'],
      colWidths: [25, 65, 70, 10, 20, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
        let discountPer = ((((product.price - product.discounted_price) / product.price) * 100).toFixed(2));
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, discountPer + ' %']);
      });
    } else {
      products.slice(toRecord, fromRecord).forEach((product) => {
        let discountPer = ((((product.price - product.discounted_price) / product.price) * 100).toFixed(2));
        if (isNaN(discountPer)) {
          // Checking isNan or not
        } else if ((/\S/.test(product.brand))) {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, discountPer + ' %']);
          rc += 1;
        }
      });
      console.log('Displaying ' + rc + ' Records having discount % out of ' + totalRC + ' records out of ' + products.length);
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
      console.log('Displaying ' + totalRC + ' records out of ' + products.length);
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
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price'],
      colWidths: [25, 65, 70, 10, 20],
    });

    // products.slice(toRecord, fromRecord).forEach((product) => {
    products.forEach((product) => {
      let spProCat = product.product_category_tree.split(/\s*>>\s*/); // Split the product category by >>

      /* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       * | process.argv[3] have minPrice         |
       * | process.argv[4] have maxPrice         |
       * | process.argv[5] have the Brand name   |
       * | process.argv[6] have Product Category |
       * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       */
      if ((product.discounted_price >= parseInt(process.argv[3], 0) && product.discounted_price <= parseInt(process.argv[4], 0)) && (product.brand === process.argv[5]) && ((spProCat[1] === process.argv[6]) || (spProCat[2] === process.argv[6]) || (spProCat[3] === process.argv[6]))) {
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
        rc += 1;
      } else if ((product.discounted_price >= parseInt(process.argv[3], 0) && product.discounted_price <= parseInt(process.argv[4], 0)) && (product.brand === process.argv[5])){
        table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price]);
        rc += 1;
      }
    });

    console.log('Displaying ' + rc + ' records out of ' + products.length);
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};

/* |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 * | Show Product Details with Ratings                |
 * |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.productRatingDetails = (products) => {
  if (products.length > 0) {
    let table = new Table({
      head: ['Brand', 'Product Name', 'Product Category Tree', 'Price', 'Discounted_Price', 'Product_rating'],
      colWidths: [25, 65, 70, 10, 20, 20],
    });

    if (!fromRecord) {
      products.slice(0, toRecord).forEach((product) => {
        if ((product.product_rating !== 'No rating available') && (product.product_rating !== 'Flat Top Buffing Foundation Brush') && (product.product_rating !== 'hrung in die Kernphysik for Rs.1805 online. Einf&uuml')) {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, product.product_rating]);
          rc += 1;
        }
      });
    } else if (fromRecord) {
      products.slice(toRecord, fromRecord).forEach((product) => {
        if ((/\S/.test(product.brand)) && (product.product_rating !== 'No rating available') && (product.product_rating !== 'Flat Top Buffing Foundation Brush') && (product.product_rating !== 'hrung in die Kernphysik for Rs.1805 online. Einf&uuml')) {
          table.push([product.brand, product.product_name, product.product_category_tree, product.price, product.discounted_price, product.product_rating]);
          rc += 1;
        }
      });
    }
    console.log('Displaying ' + rc + ' records out of ' + products.length);
    console.log(table.toString());
  } else {
    console.log('--------------------');
    console.log('No product Found.');
    console.log('--------------------');
  }
};
