function Prices() {
    function calculateFinalPrice(basePrice,passengerPercentChange,flightPercentChange) {
        const multiplier1 = (100+passengerPercentChange)/100;
        const multiplier2 = (100+flightPercentChange)/100;
        const unrounded = basePrice*multiplier1*multiplier2;
        const numPlaces = 2;
        const tenPow = Math.pow(10,numPlaces);
        return Math.round(tenPow*unrounded)/tenPow;
    }

    function calculateDefaultFinalPrice(basePrice,passengerType,flightType) {
        const vip="vip";
        const regular="regular";
        const economy="economy";
        const business="business";
        let passengerPercentChange=0;
        let flightPercentChange=0;
        passengerType=passengerType.toLowerCase();
        flightType=flightType.toLowerCase();
        if (passengerType===vip) {
            passengerPercentChange = 5;
        } else if (passengerType===regular) {
            passengerPercentChange = -5;
        }

        if (flightType===economy) {
            flightPercentChange = -3;
        } else if (flightType===business) {
            flightPercentChange = 10;
        }
        return calculateFinalPrice(basePrice,passengerPercentChange,flightPercentChange);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices();

