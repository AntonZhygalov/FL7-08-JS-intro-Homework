var euro = prompt("Euro",);
var dollar = prompt("Dollar",);

euro = parseFloat(euro);
dollar = parseFloat(dollar);

alert(euro + " euros are equal " + (euro*29.61).toFixed(2) + " UAH, " + dollar + " dollars are equal " + (dollar*26).toFixed(2) + " UAH, one euro is equal 1.14 dollars.")