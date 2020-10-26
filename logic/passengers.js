function Passengers() {
    function checkFlightCapacity(capacity,numbers) {
        let totPassengers = numbers.reduce((acc,curr)=>(acc+curr),0);
        if (totPassengers<=capacity) {
            return totPassengers;
        } else {
            throw new Error("The capacity of the flight is exceeded");
        }
    }

    function distributeAllSeatsToAllPassengers(numVIP,numRegular,numFlights,numBizSeatsPerFlight,
        numEconomySeatsPerFlight) {
        const ret = {};
        const numBizSeats = numFlights*numBizSeatsPerFlight;
        const numEconomySeats = numFlights*numEconomySeatsPerFlight;
        let x = 0;
        x = Math.min(numVIP,numBizSeatsPerFlight);
        ret.vipPassengersWithBusinessSeats = x;
        numVip -= x;

        ret.vipPassengersWithEconomySeats = 0;
        ret.regularPassengersWithBusinessSeats = 0;
        ret.regularPassengersWithEconomySeats = 0;
    }

    return {checkFlightCapacity,distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

