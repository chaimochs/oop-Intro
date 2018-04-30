var Animal = require('./animal');
class Fish extends Animal {
    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        if (newWeight > 0 && newWeight < 100) {
            this._weight = newWeight;
        } else {
            console.log("Error: fish cannot be heavier than 100 kilo");
        }
    }

    constructor(name, weight, foodAmount, energyLevel) {
        super(name, weight, foodAmount, energyLevel);
        this.foodAmount = 4;
    }

    play() {
        this.energyLevel -= 10;
        console.log("Your fish's energyLevel has gone down to " + this.energyLevel);
    }

    eat(foodAmount) {
        this.energyLevel += this.foodAmount;
        console.log("Your fish's energyLevel has gone up to " + this.energyLevel);
    }

}

module.exports = Fish;