function Passengers() {
    function checkFlightCapacity(capacity,numbers) {
        let totPassengers = numbers.reduce((acc,curr)=>(acc+curr),0);
        if (totPassengers<=capacity) {
            return totPassengers;
        } else {
            throw new Error("The capacity of the flight is exceeded");
        }
    }

    return {checkFlightCapacity};
}

module.exports = Passengers();

