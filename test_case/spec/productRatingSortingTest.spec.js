const sortByProductRating = require('../../sortByProductRating');

describe('Sort By product_rating', () => {
    let Actualproductrating = [ { product_rating: '2.5' }, {product_rating: 'No rating available'},
    { product_rating: '5' }, { product_rating: '1' }];

    let ExpectedproductsAesRT = [ { product_rating: '1' }, { product_rating: '2.5' }, { product_rating: '5' } ];

    let ExpectedproductsDesRT =  [ { product_rating: '5' }, { product_rating: '2.5' }, { product_rating: '1' } ];

    it('Ascending order of product_rating', () => {
        expect(sortByProductRating.sortProductRating(Actualproductrating,3)).toEqual(ExpectedproductsAesRT);
    });

    it('Descending order of product_rating', () => {
        expect(sortByProductRating.sortProductRating(Actualproductrating,4)).toEqual(ExpectedproductsDesRT);
    });
});
