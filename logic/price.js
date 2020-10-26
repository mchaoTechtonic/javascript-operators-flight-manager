function Prices() {
    function calculateFinalPrice(basePrice,passengerPercentChange,flightPercentChange) {
        const multiplier1 = (100+passengerPercentChange)/100;
        const multiplier2 = (100+flightPercentChange)/100;
        const unrounded = basePrice*multiplier1*multiplier2;
        const numPlaces = 2;
        const tenPow = Math.pow(10,numPlaces);
        return Math.round(tenPow*unrounded)/tenPow;
    }

    return {calculateFinalPrice};
}

module.exports = Prices();

