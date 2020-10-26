function Flights() {
    function calculateNumberOfFlights(numberOfPassengers,flightCapacity) {
        if (!Number.isInteger(numberOfPassengers) || numberOfPassengers<0) {
            throw new Error('The number of passengers must be a positive integer value');
        }
        if (!Number.isInteger(flightCapacity) || flightCapacity<0) throw new Error("The capacity of the flight must be a positive integer value");
        ret = Math.floor(numberOfPassengers/flightCapacity);
        if (numberOfPassengers%flightCapacity) {
            ++ret;
        }
        return ret;
    }

    return {calculateNumberOfFlights};
}

module.exports = Flights();