const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./unit");

describe ('Quantity objects....', () => {
    test('are equal when quantity and units match', () => {
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(4, TEASPOON).equals(new Quantity(5, TEASPOON))).toBe(false);
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TABLESPOON))).toBe(false);
        expect(new Quantity(3, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(false);
        expect(new Quantity(3, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(false);

        expect(TEASPOON.s(3).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(TEASPOON.s(3).equals(TEASPOON.s(3))).toBe(true);
    })

    test('are equal when amounts are the same in the base unit', () => {
        expect(TABLESPOON.s(1).equals(TEASPOON.s(3))).toBe(true);
    })

    test('work for the examples given', () => {
        expect(TABLESPOON.s(1).equals(TEASPOON.s(3))).toBe(true);
        expect(OUNCE.s(1).equals(TABLESPOON.s(2))).toBe(true);
        expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true);
        expect(PINT.s(1).equals(CUP.s(2))).toBe(true);
        expect(QUART.s(1).equals(PINT.s(2))).toBe(true);
        expect(GALLON.s(1).equals(QUART.s(4))).toBe(true);
    })

    test('random conversions', () =>{
        expect(GALLON.s(1).equals(TEASPOON.s(4*2*2*8*2*3))).toBe(true);
        expect(TEASPOON.s(6).equals(OUNCE.s(1))).toBe(true);
    })
})

describe('Quantities can be added together', ()=> {
    test('same unit can be added together', () => {
        const twoQuarts = QUART.s(1).add(QUART.s(1))

        expect(twoQuarts.equals(QUART.s(2))).toBe(true)
    })
})