
const fromEuroToDollar = function(valueInEuro){

    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}
const fromDollarToEuro= function(valueinDollar){
let valueInEuro = valueinDollar * 0.834;
return valueInEuro;
}

const fromDollarToYen = function (valueInYen){
    let valueInYen = valueInDollar * 106.6686; 
return valueInYen;
}

const fromYenToPound = function(valueInPound){
    let valueInPound = valueInYen * 102.32;
return valueInPound;
}

const sum = (a,b) => {
    return a + b };

//for our own use
console.log(sum(7,3))

module.exports = {sum};
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }