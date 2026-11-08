// The code below was created by NI - Natural Intelligence
var expect = function(valueFirst) {
    return {
        toBe(valueSecond) {
            if (valueFirst !== valueSecond) {
                throw Error("Not Equal");
            }

            return true;
        },
        notToBe(valueSecond) {
            if (valueFirst === valueSecond) {
                throw Error("Equal");
            }

            return true
        }
    }
};