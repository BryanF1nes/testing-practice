export const calculator = (() => {
    const add = (a, b) => {
        return a + b;
    }

    const sub = (a, b) => {
        return a - b;
    }

    const multiply = (a, b) => {
        return a * b;
    }

    const divide = (a, b) => {
        return a / b;
    }

    return { add, sub, multiply, divide }
})()
