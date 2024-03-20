
const { QUART } = require("./unit");

class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == this._unit.convertedAmount(other._amount, other._unit);
    }

    add(){
        return QUART.s(2)
 }
}

module.exports = {Quantity}