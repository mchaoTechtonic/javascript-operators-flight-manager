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
        let ret = {};
        let numBizSeats = numFlights*numBizSeatsPerFlight;
        let numEconomySeats = numFlights*numEconomySeatsPerFlight;
        let x = 0;
        x = Math.min(numVIP,numBizSeats);
        ret.vipPassengersWithBusinessSeats = x;
        numVIP -= x;
        numBizSeats -= x;

        if (numVIP>0) {
            x = Math.min(numVIP,numEconomySeats);
            ret.vipPassengersWithEconomySeats = x;
            numVIP -= x;
            numEconomySeats -= x;
        } else {
            //all VIPs fit into business class
            ret.vipPassengersWithEconomySeats = 0;
        }

        let y = 0;
        y = Math.min(numRegular,numBizSeats);
        ret.regularPassengersWithBusinessSeats = y;
        numRegular -= y;
        numBizSeats -= y;

        if (numRegular>0) {
            y = Math.min(numRegular,numEconomySeats);
            ret.regularPassengersWithEconomySeats = y;
            numRegular -= y;
            numEconomySeats -= y;
        } else {
            //all regulars fit into business;
            ret.regularPassengersWithEconomySeats = 0;
        }
        return ret;
    }

    return {checkFlightCapacity,distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

