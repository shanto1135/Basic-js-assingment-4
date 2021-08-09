//problem number 1
function seerToMon(seer) {
    const mon = seer / 40;
    return mon;
} let mons = seerToMon(120);
console.log(mons)


//problem number 2

function totalSales(shirtQuantity,pantsQuantity,shoesQuantity) {
    const shirtPrices = 100;
    const pantsPrices= 200;
    const shoesPrices = 500;
    
    const shirtPriceQuantity = shirtQuantity * shirtPrices;
    const pantsPriceQuantity = pantsQuantity * pantsPrices;
    const shoesPriceQuantity = shoesQuantity * shoesPrices;

    let sum = shirtPriceQuantity + pantsPriceQuantity + shoesPriceQuantity ;
    return sum;
}
    let totalSaless = totalSales(5,5,1);
    console.log(totalSaless);

    //problem number 3

