console.log('Hello World!')

class Order {
    constructor(pizza) {
        this.pizza = pizza;
    }
    addPizza(pizza) {
        this.pizza.push(pizza)
    }

    getOrderPrice() {
        this.total = 0;
        this.pizza.forEach(pizza => {
        pizza.getPrice();
        this.total += pizza.price;
        })

    }
}

class Pizza {
    constructor(type, ingredients) {
        this.type = type;
        this.price = 10;
        this.ingredients = ingredients;
        if (this.ingredients == 0) {
            this.ingredients = ['cheese'];
        }
    }
        getPrice() {
            if (this.ingredients.indexOf('cheese') == -1) {
                this.price = 10 + 0.99 * this.ingredients.length;
            } else {
                this.price = 10 + 0.99 * (this.ingredients.length -1);   
        }
    }
        lowerPrice() {
            this.price--;
            console.log( this.pizza, 'are Now On Sale for', this.price,'!');
        }    
    }


    const pizza1 = new Pizza('Burger Pizza', ['bacon', 'cheese', 'pepperoni']);
    console.log(pizza1);

    const pizza2 = new Pizza('Burger Pizza with no cheese!', ['bacon', 'pepperoni']);
    console.log(pizza2);

    const pizza3 = new Pizza('No Topping Pizza!', []);
    console.log(pizza3);

const order = new Order([pizza1, pizza2, pizza3]);
order.getOrderPrice();
console.log(order);