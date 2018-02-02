const sortByDiscountPercentage = require('../../sortByDicountPercentage');

describe('Sort By Discount Percentage', () => {
    let Actualproductsprice = [ { price: '3999', discounted_price: '189'}, { price: '3499', discounted_price: '189'},
    { price: '4999', discounted_price: '289'}, { price: '999', discounted_price: '75'}];

    let ExpectedproductsAesPr = [ { price: '999', discounted_price: '75', discount_percentage: '92.49 %' }, { price: '4999', discounted_price: '289', discount_percentage: '94.22 %' },
    { price: '3499', discounted_price: '189', discount_percentage: '94.60 %' }, { price: '3999', discounted_price: '189', discount_percentage: '95.27 %' } ];

    let ExpectedproductsDesPr =  [ { price: '3999', discounted_price: '189', discount_percentage: '95.27 %' }, { price: '3499', discounted_price: '189', discount_percentage: '94.60 %' },
    { price: '4999', discounted_price: '289', discount_percentage: '94.22 %' }, { price: '999', discounted_price: '75', discount_percentage: '92.49 %' } ];

    it('Ascending order of Discount Percentage', () => {
        expect(sortByDiscountPercentage.sortDiscountPercentage(Actualproductsprice,3)).toEqual(ExpectedproductsAesPr);
    });

    it('Descending order of Discount Percentage', () => {
        expect(sortByDiscountPercentage.sortDiscountPercentage(Actualproductsprice,4)).toEqual(ExpectedproductsDesPr);
    });
});
