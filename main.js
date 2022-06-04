const input = require('sync-input')

let buy = "buy";
let fill = "fill";
let take = "take";
let remaining = "remaining";
let exit = "exit";
let terminateProgram = false;
let terminateAction = false;

const coffeeMachine = {
    money: 550,
    water: 400,
    milk: 540,
    beans: 120,
    cup: 9
}

const espresso = {
    money: 4,
    water: 250,
    milk: 0,
    beans: 16,
    cup: 1
}

const latte = {
    money: 7,
    water: 350,
    milk: 75,
    beans: 20,
    cup: 1
}

const cappuccino = {
    money: 6,
    water: 200,
    milk: 100,
    beans: 12,
    cup: 1
}

function checkResourcesForEspresso() {
    if (coffeeMachine.water < espresso.water) {
        terminateAction = true;
        console.log("Sorry, not enough water!\n");
    }
    else if (coffeeMachine.milk < espresso.milk) {
        terminateAction = true;
        console.log("Sorry, not enough milk!\n");
    }
    else if (coffeeMachine.beans < espresso.beans) {
        terminateAction = true;
        console.log("Sorry, not enough coffee beans!\n");
    }
    else if (coffeeMachine.cup < espresso.cup) {
        terminateAction =true;
        console.log("Sorry, not enough cups!\n");
    }
    else {
        buyEspresso();
        enoughResourcesMessage();
    }
}

function checkResourcesForLatte() {
    if (coffeeMachine.water < latte.water) {
        terminateAction = true;
        console.log("Sorry, not enough water!\n");
    }
    else if (coffeeMachine.milk < latte.milk) {
        terminateAction = true;
        console.log("Sorry, not enough milk!\n");
    }
    else if (coffeeMachine.beans < latte.beans) {
        terminateAction = true;
        console.log("Sorry, not enough coffee beans!\n");
    }
    else if (coffeeMachine.cup < latte.cup) {
        terminateAction =true;
        console.log("Sorry, not enough cups!\n");
    }
    else {
        buyLatte();
        enoughResourcesMessage();
    }
}

function checkResourcesForCappuccino() {
    if (coffeeMachine.water < cappuccino.water) {
        terminateAction = true;
        console.log("Sorry, not enough water!\n");
    }
    else if (coffeeMachine.milk < cappuccino.milk) {
        terminateAction = true;
        console.log("Sorry, not enough milk!\n");
    }
    else if (coffeeMachine.beans < cappuccino.beans) {
        terminateAction = true;
        console.log("Sorry, not enough coffee beans!\n");
    }
    else if (coffeeMachine.cup < cappuccino.cup) {
        terminateAction =true;
        console.log("Sorry, not enough cups!\n");
    }
    else {
        buyCappuccino();
        enoughResourcesMessage();
    }
}

function enoughResourcesMessage() {
    console.log("I have enough resources, making you a coffee!\n");
}

function buyEspresso() {
    coffeeMachine.water = coffeeMachine.water - espresso.water;
    coffeeMachine.milk = coffeeMachine.milk - espresso.milk;
    coffeeMachine.beans = coffeeMachine.beans - espresso.beans;
    coffeeMachine.cup = coffeeMachine.cup - espresso.cup;
    coffeeMachine.money = coffeeMachine.money + espresso.money;
}

function buyLatte() {
    coffeeMachine.water = coffeeMachine.water - latte.water;
    coffeeMachine.milk = coffeeMachine.milk - latte.milk;
    coffeeMachine.beans = coffeeMachine.beans - latte.beans;
    coffeeMachine.cup = coffeeMachine.cup - latte.cup;
    coffeeMachine.money = coffeeMachine.money + latte.money;
}

function buyCappuccino() {
    coffeeMachine.water = coffeeMachine.water - cappuccino.water;
    coffeeMachine.milk = coffeeMachine.milk - cappuccino.milk;
    coffeeMachine.beans = coffeeMachine.beans - cappuccino.beans;
    coffeeMachine.cup = coffeeMachine.cup - cappuccino.cup;
    coffeeMachine.money = coffeeMachine.money + cappuccino.money;
}

function getStateOfCoffeeMachine() {
    console.log("The coffee machine has: ");
    console.log(`${coffeeMachine.water} ml of water`);
    console.log(`${coffeeMachine.milk} ml of milk`);
    console.log(`${coffeeMachine.beans} g of coffee beans`);
    console.log(`${coffeeMachine.cup} disposable cups`);
    console.log(`$${coffeeMachine.money} of money\n`);
}

function start() {
    while(!terminateProgram) {
        let action = input("Write action (buy, fill, take, remaining, exit):\n");

        switch (action) {
            case buy:
                let buyCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, " +
                        "back - to main menu :\n");

                switch (buyCoffee) {
                    case "1":
                        checkResourcesForEspresso();
                        break;
                    case "2":
                        checkResourcesForLatte();
                        break;
                    case "3":
                        checkResourcesForCappuccino();
                        break;
                    }
                    break;
            case fill:
                coffeeMachine.water = coffeeMachine.water +
                    Number(input("Write how many ml of water you want to add:\n"));
                coffeeMachine.milk = coffeeMachine.milk +
                    Number(input("Write how many ml of milk you want to add:\n"));
                coffeeMachine.beans = coffeeMachine.beans +
                    Number(input("Write how many grams of coffee beans you want to add:\n"));
                coffeeMachine.cup = coffeeMachine.cup +
                    Number(input("Write how many coffee cups you want to add:\n"));
                break;
            case take:
                console.log(`I gave you ${coffeeMachine.money}$\n`);
                coffeeMachine.money = 0;
                break;
            case remaining:
                getStateOfCoffeeMachine();
                break;
            case exit:
                terminateProgram = true;
                break;
        }
    }
}

start();
