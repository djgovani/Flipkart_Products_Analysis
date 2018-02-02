const productFilter = require('../../productFilter');

describe('Filter products', () => {
    let Actualproductrating = [   { brand: 'HRS',
    product_name: 'HRS CLUB BOY Thigh Pads',
    product_category_tree: '["Sports & Fitness >> Team Sports >> Cricket >> Cricket Pads >> HRS Cricket Pads >> HRS CLUB BOY Thigh Pads (WHITE, RIGHT-HANDED)"]',
    price: '280',
    discounted_price: '250',
    product_rating: 'No rating available' },
    { brand: 'HRS',
    product_name: 'HRS ULTIMATE BOY Chest Pads',
    product_category_tree: '["Sports & Fitness >> Team Sports >> Cricket >> Cricket Pads >> HRS Cricket Pads >> HRS ULTIMATE BOY Chest Pads (WHITE, RIGHT-HANDED)"]',
    price: '440',
    discounted_price: '395',
    product_rating: 'No rating available' },
    { brand: 'Indcrown',
    product_name: 'Indcrown Net Embroidered Semi-stitched Lehenga Choli Material',
    product_category_tree: '["Clothing >> Women\'s Clothing >> Ethnic Wear >> Fabric >> Lehenga Choli Material >> Indcrown Lehenga Choli Material >> Indcrown Net Embroidered Semi-stitched Lehenga C..."]',
    price: '999',
    discounted_price: '699',
    product_rating: 'No rating available' },];

    let ExpectedproductsBrandCat = [ { brand: 'HRS',
    product_name: 'HRS CLUB BOY Thigh Pads',
    product_category_tree: '["Sports & Fitness >> Team Sports >> Cricket >> Cricket Pads >> HRS Cricket Pads >> HRS CLUB BOY Thigh Pads (WHITE, RIGHT-HANDED)"]',
    price: '280',
    discounted_price: '250' },
  	{ brand: 'HRS',
    product_name: 'HRS ULTIMATE BOY Chest Pads',
    product_category_tree: '["Sports & Fitness >> Team Sports >> Cricket >> Cricket Pads >> HRS Cricket Pads >> HRS ULTIMATE BOY Chest Pads (WHITE, RIGHT-HANDED)"]',
    price: '440',
    discounted_price: '395' } ];

    let ExpectedproductsBrand =  [ { brand: 'Indcrown',
    product_name: 'Indcrown Net Embroidered Semi-stitched Lehenga Choli Material',
    product_category_tree: '["Clothing >> Women\'s Clothing >> Ethnic Wear >> Fabric >> Lehenga Choli Material >> Indcrown Lehenga Choli Material >> Indcrown Net Embroidered Semi-stitched Lehenga C..."]',
    price: '999',
    discounted_price: '699' } ];

    it('Filter products using minPice maxPrice Brand, category', () => {
        expect(productFilter.productFilter(Actualproductrating, 100, 1000, 'HRS', 'Cricket')).toEqual(ExpectedproductsBrandCat);
    });

    it('Filter products using minPice maxPrice Brand', () => {
        expect(productFilter.productFilter(Actualproductrating, 300, 700, 'Indcrown')).toEqual(ExpectedproductsBrand);
    });
});
