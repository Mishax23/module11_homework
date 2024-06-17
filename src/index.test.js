import { addA } from "./index.js";

describe('add', () => {
    it('add 5 + 5 equal 10', () => {
        expect(addA(5)).toBe(10);
    });

    it('add 10 + 5 equal 15', () => {
        expect(addA(10)).toBe(15);
    });

    it('add 15 + 5 equal 20', () => {
        expect(addA(15)).toBe(20);
    });
});