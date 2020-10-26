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

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let sumOfDistances = distancesArray.reduce((acc,curr)=>(acc+curr),0);
        console.log(sumOfDistances);
        if (sumOfDistances<=0.5*distanceLimit) {
            return "The revision needs to be done within the next 3 months";
        } else if (sumOfDistances<=.75*distanceLimit) {
            return "The revision needs to be done within the next 2 months";
        } else if (sumOfDistances <= distanceLimit) {
            return "The revision needs to be done within the next month";
        } else {
            throw new Error("The maximum allowed flight distance should be exceeded");
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();