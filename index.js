// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    //returns the number of blocks given a value
    const hqLocation =42; //43rd street
    let distanceBlocks =Math.abs(pickupLocation-hqLocation)//ensures positive value
    return distanceBlocks;
}
console.log(distanceFromHqInBlocks(43));


function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation); // gives distance in blocks
    const feetPerBlock = 264; // 1 block = 264 feet
    return blocks * feetPerBlock; // Converts blocks to feet
  }
  console.log(distanceFromHqInFeet(50)); // //output 50-42=8*264=2112
console.log(distanceFromHqInFeet(40));//40-42=2*264=528
  console.log(distanceFromHqInBlocks(34));
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    function distanceTravelledInFeet(start, destination) {
        const blocksTravelled = Math.abs(start - destination); // Distance in blocks
        const feetPerBlock = 264; // 1 block = 264 ft
        return blocksTravelled * feetPerBlock;  // 1b *264ft
}  
console.log(distanceTravelledInFeet(50,58));


        //returns the fare for the customer
        function distanceTravelledInFeet(start, destination) {
            return Math.abs(start - destination) * 264; // Convert blocks to feet
        }
        
        function calculatesFarePrice(start, destination) {
            const distance = distanceTravelledInFeet(start, destination);
        
            if (distance <= 400) {
                return 0; // Free ride less 400 feet
            } else if (distance > 400 && distance <= 2000) {
                return (distance - 400) * 0.02; // 2 cents 400 feet, less 2000
            } else if (distance > 2000 && distance <= 2500) {
                return 25; // Flat rate of $25 below 2500, above 2000
            } else {
                return 'cannot travel that far'; //over 2500 are not allowed
            }
        }
        