function Util() {
    function calculateTotalDistributedPassengers(seatAssignmentObj) {
        //Object.entries() members are [key,value] pairs;
        //we need only the value (since that represents a quantity of seated passengers)
        return Object.entries(seatAssignmentObj).reduce( (acc,[,v])=>{
            return acc+v
        },0);
    }

    function calculateTotalNumberOfPassengers(amountsOfPassengers) {
        return amountsOfPassengers.reduce((acc,curr)=>(acc+curr),0);
    }

    function checkInput(input) {
        if (!input) {
            throw new Error("The input should not be empty");
        } else if (isNaN(input)) {
            throw new Error("The input should be a number");
        }

    }

    function calculateTotalDistance(distances) {
        return distances.reduce((acc,curr) => {
            if (curr<0) {
                return acc;
            } else {
                return acc+curr;
            }
        },0)
    }

    function calculateBonusPoints(distancesBusiness,distancesEconomy,businessBonusPercent,
        economyBonusPercent) {
        let businessPoints=0;
        let economyPoints=0;
        const businessDistance = calculateTotalDistance(distancesBusiness);
        const economyDistance = calculateTotalDistance(distancesEconomy);
        businessPoints = businessDistance*businessBonusPercent/100;
        economyPoints = economyDistance*economyBonusPercent/100;
        return businessPoints+economyPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance,calculateBonusPoints};
}

module.exports = Util();

