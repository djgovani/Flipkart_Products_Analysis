const sortByBrand = require('../../sortByBrand');

describe('Sort By Brand', () => {
	let Actualproducts = [ { brand: 'Carrel'}, { brand: 'zasmina'}, { brand: 'Aagam'}, { brand: 'ZALULA'}];
    let ExpectedproductsAesBrand = [ { brand: 'Aagam'}, { brand: 'Carrel'}, { brand: 'ZALULA'}, { brand: 'zasmina'} ];
    let ExpectedproductsDesBrand = [ { brand: 'zasmina'}, { brand: 'ZALULA'}, { brand: 'Carrel'}, { brand: 'Aagam'} ];


	it('Ascending order of brand name', () => {
        expect(sortByBrand.sortBrandName(Actualproducts,1)).toEqual(ExpectedproductsAesBrand);
	});

    it('Descending order of brand name', () => {
        expect(sortByBrand.sortBrandName(Actualproducts,2)).toEqual(ExpectedproductsDesBrand);
    });
});
