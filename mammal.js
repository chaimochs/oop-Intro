var Animal = require('./animal');
class Mammal extends Animal {
    constructor(name, weight, foodAmount, energyLevel, bodyTemperature) {
        super(name, weight, foodAmount, energyLevel, bodyTemperature);
        this.bodyTemperature = 35;
    }
}

module.exports = Mammal;