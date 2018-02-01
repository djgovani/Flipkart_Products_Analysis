# Flipkart Products Analysis
This is a command line exercise. This exercise is use for Flipkart products analysis.
In this command line exercise we will analyze the products by various parameters like we can analyze the products by brand name, discount percentage, filteration and by using the product ratings too.


 <h3 align="center"> [**Requriements**](#requriements) <b> | </b>[**Setup**](#setup) <b> | </b>[**Features**](#features) <b> | </b>    [**Usage**](#usage) <b> | </b> [**Questions**](#questions) <b> | </b> [**Conclusion**](#conclusion) <b> <a name="top"></a>  <center> </h3>

<a name="#requriements"></a>
## Requriements
* [node js](https://www.npmjs.com/get-npm) Version greater or equal to  8.9.4

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="#setup"></a>
## Setup
* <a href="#top">Download</a> or clone this project. To clone the project type below command in terminal.

    ```bash
        git clone http://192.168.1.5:10080/deepimp/Flipkart_Products_Analysis.git
    ```

* Install all dependencies

    ```bash
        npm install
    ```

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>

<a name="#features"></a>
## Features
- It will display the total number of displaying records out of the total number of records.
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
node index.js 1 5 10
```
* To sort the products, in terminal you need to pass the arguments `node index.js [1] [2] [3]`
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
node index.js 7 100 3000 ABSTAR  OR  node index.js 7 100 3000 ABSTAR Bags
```
* To filter the products, in terminal you need to pass the arguments `node index.js [1] [2] [3] [4] [5]`
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
    node index.js 1 5 10
    ```

    * `1` it will show Table in ascending order of Brand.
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price |
    | --------        | --------                    | --------                         | ------| ------           |
    | Aligatorr       | Aligatorr Aviator Sunglasses| ["Sunglasses >> Aligatorr Avi... | 499   | 180              |
    | Alisha          | Alisha Solid Cycling Shorts | ["Clothing >> Women's Clothing...| 699   | 267              |
    | Allen Solly     | Allen Solly Self Design     | ["Clothing >> Kids' Clothing...  | 1599  | 1119             |
    | Allin Exporters | Allin Exporters Vetiver Oil | ["Beauty and Personal Care...    | 672   | 672              |
    | Allora          | Allora 3D Screen Expander   | ["Mobiles & Accessories >> Mob...| 899   | 499              |



 2. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price` data in CLI table in descending  order of `Brand`. If the two products have same brand, Whatever comes first in CSV should be listed first.

    ```bash
    node index.js 2 5 10
    ```
    * `2` it will show Table in descending order of Brand.
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price |
    | --------        | --------                    | --------                         | ------| ------           |
    | youniqueshop    | Stainless Steel Hand Juicer | ["Kitchen & Dining >> Kitchen... | 810   | 640              |
    | xy decor        | xy decor Cotton Sofa Cover  | ["xy decor Cotton Sofa Cover...  | 1699  | 599              |
    | xpert           | xpert Running Shoes         | ["Footwear >> Kids' & Infan...   | 999   | 499              |
    | womaniya        | womaniya Alloy Bracelet     | ["Jewellery >> Bangles...        | 2000  | 1200             |
    | wallskart       | wallskart Wallpaper         | ["Home Decor & Festive >> Wall...| 599   | 299              |



 3. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in ascending order of discount(in %) given in products.

    ```bash
    node index.js 3 5 10
    ```
    * `3` it will show Table in ascending order of discount(in %).
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

    | Brand           | Product Name                | Product Category Tree            | Price | Discounted Price | Discount %|
    | --------        | --------                    | --------                         | ------| ------           | --------  |
    | Amzer           | Amzer Swiveling Air Vent    | [["Automotive >> Accessories...  | 1399  | 1399             | 0.00 %    |
    | Kosher          | Kosher Kadhai 5 L           | ["Kitchen & Dining >> Cookwa...  | 592   | 592              | 0.00 %    |
    | Freelance       | Freelance Vacuum Bottles    | ["Pens & Stationery >> School... | 699   | 699              | 0.00 %    |
    | Voylla          | Voylla Yellow Gold Plated   | ["Jewellery >> Necklaces & Cha...| 390   | 390              | 0.00 %    |
    | Pigeon          | Pigeon Gravy Premium with   | ["Kitchen & Dining >> Cookware...| 1333  | 1333             | 0.00 %    |


 4. Show `Brand`, `Product Name`, `Product Category Tree`, `Price`, `Discounted Price`, `Discount in %` data in CLI table in descending order of discount(in %) given in products.

    ```bash
    node index.js 4 5 10
    ```
    * `4` it will show Table in descending order of discount(in %).
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

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
    node index.js 7 100 1000 VGreen Tools
    ```
    * `7` it will show the the filtered record table.
    * `100` to `1000` So it will display the records which having minimum discount price `100` and maximum discount price `1000`.
    * `VGreen` `Tools` it will display the records which having the `VGreen` Brand name and `Tools` category.
<br><br>

    | Brand     | Product Name               | Product Category Tree            | Price | Discounted Price |
    | --------  | --------                   | --------                         | ------| ------           |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 499   | 320              |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 500   | 399              |
    | VGreen    | VGreen Plant Container Set | ["Tools & Hardware >> Tools...   | 400   | 350              |



 6. List products in ascending order of product ratings. If any products have same ratings then whatever come first in csv should be listed first. Ignore products which have no rating yet.

    ```bash
    node index.js 5 1 10
    ```
    * `5` it will show Table in ascending order of product rating.
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

    | Brand          | Product Name              | Product Category Tree            | Price | Discounted Price | Product Rating |
    | --------       | --------                  | --------                         | ------| ------           | ------         |
    | Yuuup          | Yuuup Tempered Glass      | ["Mobiles & Accessories >> Mob...| 699   | 129              | 1              |
    | Yuccabe Italia | Self Watering Planter     | ["Tools & Hardware >> Tools...   | 1299  | 750              | 1              |
    | Xenio          | Xenio GL86 Tempered Glass | ["Mobiles & Accessories >> Mob...| 999   | 180              | 1              |


 7.  List products in descending order of product ratings. If any products have same ratings then whatever come last in csv should be listed first. Ignore products which have no rating yet.

    ```bash
    node index.js 5 1 10
    ```
    * `6` it will show Table in descending order of product rating.
    * `5` to `10` So it will display the records from `5` to `10`.
<br><br>

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

In this exercise we have seen that the analysis of products can be done by using the various parameters like Brand, discount price, etc... Also analysis of products can be done by using the filteration.

<b><a href="#top">↥ back to top</a></b>
<br/>
<hr>