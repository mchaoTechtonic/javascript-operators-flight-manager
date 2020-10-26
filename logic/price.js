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
        passengerType=passengerType.toLowerCase();
        flightType=flightType.toLowerCase();
        let ret = basePrice;
        if (passengerType===vip) {
            ret*=1.05;
        } else if (passengerType===regular) {
            ret*=.95;
        }

        if (flightType===economy) {
            ret*=.97;
        } else if (flightType===business) {
            ret*=1.1;
        }
        return Math.round(ret*100)/100;
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices();

