const Table = require('cli-table');

let toRecord = parseInt(process.argv[3], 0);
let fromRecord = parseInt(process.argv[4], 0);
let rc = 0; // Record counter

/* |~~~~~~~~~~~~~~~~~~~~~~~|
 * |  Show Product Details |
 * |~~~~~~~~~~~~~~~~~~~~~~~|
 */
exports.showProducts = (products) => {
  if (products.length > 0) {

    const ColumnWidth = Object.keys(products[0]).fill(25);

    let table = new Table({
      head: Object.keys(products[0]),
      colWidths: ColumnWidth,
    });

    if (process.argv[2] === '7') {
      products.forEach((product) => {
        table.push(Object.values(product));
        rc += 1;
      });
    } else {
      products.slice(toRecord, fromRecord).forEach((product) => {
        table.push(Object.values(product));
        rc += 1;
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
