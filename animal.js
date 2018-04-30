class Animal {
    get name() {

        return this._name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this._name = newName;
        } else {
            console.log("Error: provided name must be 2 characters or longer");
        }
    }

    get weight() {
        return this._weight;
    }

    set weight(newWeight) {
        console.log(this.name + " weight accessed");
        if (newWeight) {
            this._weight = newWeight;
        } else {
            console.log("Error: provided weight must be heavier than 0 kilo");
        }
    }

    constructor(name, weight, foodAmount, energyLevel, bodyTemperature) {
        this.name = name;
        this.weight = weight;
        this.foodAmount = 10;
        this.energyLevel = energyLevel;
    }

    play() {
        this.energyLevel -= 50;
        console.log("Your animal's energyLevel has gone down to " + this.energyLevel);
    }

    eat(foodAmount) {
        this.energyLevel += this.foodAmount;
        console.log("Your animal's energyLevel has gone up to " + this.energyLevel);
    }

    greet() {
        if (this.name && this.weight) {
            console.log('Hi!, my name is ' + this.name + ' and I weigh ' + this.weight + ' kilos');
        }
    }

    mate(father, mother) {
        let femaleType = mother.constructor.name;
        let maleType = father.constructor.name;
        if (femaleType === maleType) {
            var newbaby = new mother.constructor("baby" + mother.constructor.name, 2, 3, 40); 
            console.log("Mazel Tov! A baby " + mother.constructor.name + " was born!");
            console.log(newbaby);
            } else {
            console.log("ERROR: You cannot mate a " + maleType + " with a " + femaleType);
        }
    }

}

module.exports = Animal;