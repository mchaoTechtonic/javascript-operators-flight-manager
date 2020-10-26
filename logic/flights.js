function Flights() {
    function calculateNumberOfFlights(numberOfPassengers,flightCapacity) {
        ret = Math.floor(numberOfPassengers/flightCapacity);
        if (numberOfPassengers%flightCapacity) {
            ++ret;
        }
        return ret;
    }

    return {calculateNumberOfFlights};
}

module.exports = Flights();