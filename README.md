# Flipkart Products Analysis
This is a command line exercise. This exercise is use for Flipkart products analysis.
In this command line exercise we will performe the some oprations like sorting, filtering the data. Now this sorting will apply on the Product brand as acending and decending or. Same as the brand, we will sort the dicount percentage and product rating as acending and decending order.
Filltering will apply on all the products in this filter, prodcuts can filter by inputing the minimum discounted price, maximum discounted price, brand name and product category.


 <h2 align="center"> [**Requriements**](#requriements) <b> | </b>[**Installation**](#installation) <b> | </b>[**Features**](#features) <b> | </b>    [**Usage**](#usage) <b> | </b> [**Questions**](#questions) <b> | </b> [**Conclusion**](#conclusion) <b> <a name="top"></a>  <center> </h2>

<a name="#requriements"></a>
## Requriements
* [npm](https://www.npmjs.com/get-npm) Version greater or equal to  5.6.0
* [cli-table](https://www.npmjs.com/package/cli-table)
* [fast-csv](https://www.npmjs.com/package/fast-csv)

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="#installation"></a>
## Installation
* If you have not install `npm` yet then type `npm install` into your terminal.
* Still left to install `cli-table` type `npm install cli-table` into your terminal.
* Same as need to install `fast-csv` type `npm install fast-csv` into your terminal.
* After that run the application as shown in [usage](#usage).

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="#features"></a>
## Features
- It will display the total number of records.
- It will display the total number of displaying records out of the total number of records.
- It will display the total number of record having discount out of the displaying records.
- It will display Brand, Product Name, Product Category Tree, Price, Discounted Price data in CLI table in ascending order of Brand.
- It will display Brand, Product Name, Product Category Tree, Price, Discounted Price data in CLI table in descending  order of Brand.
- It will display Brand, Product Name, Product Category Tree, Price, Discounted Price, Discount in % data in CLI table in ascending order of discount(in %) given in products.
- It will display Brand, Product Name, Product Category Tree, Price, Discounted Price, Discount in % data in CLI table in descending order of discount(in %) given in products.
- It will display the filtered products by using the minimum Price, maximum Price, Brand name and Product category.
- It will display the products in ascending order of product ratings.
- It will display the products in descending order of product ratings


<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>
<a name="#usage"></a>
## Usage

```bash
$node index.js 1 5 10
```
* To sort the products, in terminal you need to pass the arguments `$node index.js [1] [2] [3]`
* `[1]` is for the ascending and descending order.
    * If you write `1` over here than it will show Table in ascending order of Brand.
    * If you write `2` over here than it will show Table in descending order of Brand.
    * If you write `3` over here than it will show Table in ascending order of discount (in %).
    * If you write `4` over here than it will show Table in descending order of discount (in %).
    * If you write `5` over here than it will show Table in ascending order of Product Rating.
    * If you write `6` over here than it will show Table in descending order of Product Rating.
* `[2]` is for the starting range of the records for example user need to start record from `5`.
* `[3]` is for the ending range of the records for example user need to end the record to `10`.
* `[2] [3]` means from `5` to `10`. So it will display the records from `5` to `10`.


```bash
$node index.js 7 100 3000 ABSTAR  OR  $node index.js 7 100 3000 ABSTAR Bags
```
* To filter the products, in terminal you need to pass the arguments `$node index.js [1] [2] [3] [4] [5]`
* `[1]` is for the filter option so here need to pass the `5`. `5` is used to select the filter option.
* `[2]` is for the minimum price to filter the products for example user need the products having discount price maximum or equal to `100`.
* `[3]` is for the maximum price to filter the products for example user need the products having discount price minimum or equal to `3000`.
* `[4]` is for the brand name to filter the products for example user need the products having brand name `ABSTAR`.
* `[5]` us for the category to filter the products for example user need the products which is in `Bags` category.
* Here `[5]` is the optional argument.


<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="questions"></a>
## *Questions

 1. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price` data in CLI table in ascending order of `Brand`. If the two products have same brand, Whatever comes first in CSV should be listed first.

    ```bash
    $node index.js 1 5 10
    ```


    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price |
    | --------        | --------                    | --------                         | ------| ------           |
    | Aligatorr       | Aligatorr Aviator Sunglasses| ["Sunglasses >> Aligatorr Avi... | 499   | 180              |
    | Alisha          | Alisha Solid Cycling Shorts | ["Clothing >> Women's Clothing...| 699   | 267              |
    | Allen Solly     | Allen Solly Self Design     | ["Clothing >> Kids' Clothing...  | 1599  | 1119             |
    | Allin Exporters | Allin Exporters Vetiver Oil | ["Beauty and Personal Care...    | 672   | 672              |
    | Allora          | Allora 3D Screen Expander   | ["Mobiles & Accessories >> Mob...| 899   | 499              |



 2. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price` data in CLI table in descending  order of `Brand`. If the two products have same brand, Whatever comes first in CSV should be listed first.

    ```bash
    $node index.js 2 5 10
    ```


    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price |
    | --------        | --------                    | --------                         | ------| ------           |
    | youniqueshop    | Stainless Steel Hand Juicer | ["Kitchen & Dining >> Kitchen... | 810   | 640              |
    | xy decor        | xy decor Cotton Sofa Cover  | ["xy decor Cotton Sofa Cover...  | 1699  | 599              |
    | xpert           | xpert Running Shoes         | ["Footwear >> Kids' & Infan...   | 999   | 499              |
    | womaniya        | womaniya Alloy Bracelet     | ["Jewellery >> Bangles...        | 2000  | 1200             |
    | wallskart       | wallskart Wallpaper         | ["Home Decor & Festive >> Wall...| 599   | 299              |



 3. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in ascending order of discount(in %) given in products.

    ```bash
    $node index.js 3 5 10
    ```


    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price | Discount %|
    | --------        | --------                    | --------                         | ------| ------           | --------  |
    | Amzer           | Amzer Swiveling Air Vent    | [["Automotive >> Accessories...  | 1399  | 1399             | 0.00 %    |
    | Kosher          | Kosher Kadhai 5 L           | ["Kitchen & Dining >> Cookwa...  | 592   | 592              | 0.00 %    |
    | Freelance       | Freelance Vacuum Bottles    | ["Pens & Stationery >> School... | 699   | 699              | 0.00 %    |
    | Voylla          | Voylla Yellow Gold Plated   | ["Jewellery >> Necklaces & Cha...| 390   | 390              | 0.00 %    |
    | Pigeon          | Pigeon Gravy Premium with   | ["Kitchen & Dining >> Cookware...| 1333  | 1333             | 0.00 %    |


 4. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in descending order of discount(in %) given in products.

    ```bash
    $node index.js 4 5 10
    ```


    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price | Discount %|
    | --------        | --------                    | --------                         | ------| ------           | --------  |
    | Rajcrafts       | Rajcrafts Floral Double     | ["Home Furnishing >> Bed Linen...| 6000  | 208              | 96.53 %   |
    | FashBlush       | FashBlush Forever New       | ["Jewellery >> Necklaces & Cha...| 3999  | 189              | 95.27 %   |
    | Bling           | Bling Book Case for iPad 2  | ["Mobiles & Accessories >> Tab...| 1816  | 99               | 94.55 %   |
    | Mydress         | Mydress Mystyle Bulb Led    | ["Computers >> Laptop Accessor...| 999   | 75               | 92.49 %   |
    | Soulful         | Soulful Threads Red Thread  | ["Beauty and Personal Care...    | 21125 | 1700             | 91.95 %   |



 5. Filter the products data by category, brand and discounted price wise. It should consider all the sub categories too. For example

           category = women's clothing

           min price = 100

           max price = 10,000

           Brand = Alisha

       Then It should show list of products which fulfill above conditions.

    ```bash
    $node index.js 7 100 1000 VGreen Tools
    ```


    | Brand     | Product Name               | Product Category Tree            | Price | Discounted Price |
    | --------  | --------                   | --------                         | ------| ------           |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 499   | 320              |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 500   | 399              |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 400   | 350              |



 6. List products in ascending order of product ratings. If any products have same ratings then whatever come first in csv should be listed first. Ignore products which have no rating yet.

    ```bash
    $node index.js 5 1 10
    ```


    | Brand          | Product Name              | Product Category Tree            | Price | Discounted Price | Product Rating |
    | --------       | --------                  | --------                         | ------| ------           | ------         |
    | Yuuup          | Yuuup Tempered Glass      | ["Mobiles & Accessories >> Mob...| 699   | 129              | 1              |
    | Yuccabe Italia | Self Watering Planter     | ["Tools & Hardware >> Tools...   | 1299  | 750              | 1              |
    | Xenio          | Xenio GL86 Tempered Glass | ["Mobiles & Accessories >> Mob...| 999   | 180              | 1              |


 7.  List products in descending order of product ratings. If any products have same ratings then whatever come last in csv should be listed first. Ignore products which have no rating yet.

    ```bash
    $node index.js 5 1 10
    ```


    | Brand          | Product Name              | Product Category Tree            | Price | Discounted Price | Product Rating |
    | --------       | --------                  | --------                         | ------| ------           | ------         |
    | Zyxel          | Zyxel 500 Mbps Powerl...  | ["Computers >> Network Compone...| 8646  | 4800             | 5              |
    | Tenda          | Tenda A5                  | ["Computers >> Network Compone...| 1299  | 750              | 5              |
    | Tenda          | Tenda F3 300mbps Wireless | ["Computers >> Network Compone...| 3500  | 1899             | 5              |


**Actual output data might be different.* <br/>
<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="conclusion"></a>
## Conclusion

In this exercise we have done the sorting of Brand, discount percentage and product rating in ascending and descending order. As well as we have done the filter option which filter the products according to the user input like minimum discount price, maximum discount price, brand name, category.

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>