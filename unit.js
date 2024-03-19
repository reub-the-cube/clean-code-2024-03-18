const {Quantity} = require("./quantity");

class Unit{
    constructor(relativeRatio = 1, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
        } else {
            this._ratioToBaseUnit = 1;
        }
    }

    s(amount){
        return new Quantity(amount, this);
    }

    convertedAmount(otherAmount, otherUnit){
        return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3, TEASPOON);
const OUNCE = new Unit(2, TABLESPOON);
const CUP = new Unit(8, OUNCE);
const PINT = new Unit(2, CUP);
const QUART = new Unit(2, PINT);
const GALLON = new Unit(4, QUART);

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON}