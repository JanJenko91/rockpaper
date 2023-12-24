// rock paper scissors

//let rock;
//let paper;
//let scissors;
//let computerChoice







function rollRandomNumber() {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();
  
    // Scale the random number to the range [1, 3]
    const randomNumber = Math.floor(randomDecimal * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper"; 
        } else {
            return "rock";
        }
    }
  
    
  
  
  // Example usage
  const result = rollRandomNumber();
  console.log(result);






// 3 random rock paper scissors
// 1 select random number from 1 to 3 
// if 1 = rock
// if 2 = paper
// else 3 = scissors
// return the computer choice
// console log the random choice 