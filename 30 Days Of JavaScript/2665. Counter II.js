// The code below was created by NI - Natural Intelligence
var createCounter = function(value) {
    const initialValue = value;
    return {
        increment() {
            return ++value;
        },
        decrement() {
            return --value;
        },
        reset() {
            value = initialValue
            return value;
        }
    }
};