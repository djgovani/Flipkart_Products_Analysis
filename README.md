# Flipkart Products Analysis
This is a command line exercise. This exercise is use for Flipkart products analysis.


## Requriements
* Flipkart products data in `CSV file`
* [cli-table](https://www.npmjs.com/package/cli-table)
* [fast-csv](https://www.npmjs.com/package/fast-csv)

## Usage

`$node index.js 5 10 1`
* In terminal you need to pass the three arguments `$node index.js [1] [2] [3]`
* `[1]` is for the starting range of the records for example user need to start record from `5`.
* `[2]` is for the ending range of the records for example user need to end the record to `10`.
* `[1] [2]` means from `5` to `10`. So it will display the records from `5` to `10`.
* `[3]` is for the ascending and descending order.
    * If you write `1` over here than it will show Table in ascending order of Brand.
    * If you write `2` over here than it will show Table in descending order of Brand.
    * If you write `3` over here than it will show Table in ascending order of discount (in %).
    * If you write `4` over here than it will show Table in descending order of discount (in %).

## Questions

 1. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price` data in CLI table in ascending order of `Brand`. If the two products have same brand, Whatever comes first in CSV should be listed first.
 2. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price` data in CLI table in descending  order of `Brand`. If the two products have same brand, Whatever comes first in CSV should be listed first.
 3. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in ascending order of discount(in %) given in products.
 4. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in descending order of discount(in %) given in products.
