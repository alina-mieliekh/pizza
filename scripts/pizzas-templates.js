var pizzasTemplates = (function () {

    var objectWithPizzas = {

        margherita: {
            "name": "Margherita",
            "price": 10,
            "quantity": 1,
            "ingredients": []
        },
        pizza1: {
            "name": "Pizza Number One",
            "price": 20,
            "quantity": 1
        },
        pizza2: {
            "name": "Seafood Pizza",
            "price": 19,
            "quantity": 1
        },
        pizza3: {
            "name": "BeFit Pizza",
            "price": 25,
            "quantity": 1
        },
        pizza4: {
            "name": "Caprese Pizza",
            "price": 35,
            "quantity": 1
        },
        pizza5: {
            "name": "Four Cheese Pizza",
            "price": 30,
            "quantity": 1
        },
        pizza6: {
            "name": "New York Pizza",
            "price": 27,
            "quantity": 1
        },
        pizza7: {
            "name": "Vegetarian Pizza",
            "price": 17,
            "quantity": 1
        },
        pizza8: {
            "name": "Ukrainian Pizza",
            "price": 23,
            "quantity": 1
        }

    };

    var getPizza = function (name) {
        var dynamicCurrentPizza = objectWithPizzas[name];
        return JSON.parse(JSON.stringify(dynamicCurrentPizza));
    };

    return {
        getPizza: getPizza
    };
})();


var pizza = pizzasTemplates.getPizza('margherita');
var pizza2 = pizzasTemplates.getPizza('pizza2');
var pizza3 = pizzasTemplates.getPizza('Seafood');

console.log(pizza);
console.log(pizza2);
console.log(pizza3);
