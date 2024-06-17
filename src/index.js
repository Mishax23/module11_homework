//Функция createAdder(a), возвращает функцию addA, которая принимает b и возвращает a + b.
function createAdder(a) {
    return function addA(b) {
        return a + b;
    }
};

export const addA = createAdder(5);
