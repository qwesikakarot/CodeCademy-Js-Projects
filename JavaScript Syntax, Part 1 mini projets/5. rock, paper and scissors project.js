// getting userinput if rock, papper or scissors
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
     return userInput;
    } else {
      return ' Error! Invalid input. Enter Rock, Paper or Scissors'
    }
    
    }; //userinput
    //console.log(getUserChoice('Rock'))
    
    
    //getting random computer input
    const getComputerChoice = () =>{
      let randomComputerInput = Math.floor(Math.random() * 3);
    
    if(randomComputerInput === 0){
      return 'rock'
    };
    
    if(randomComputerInput === 1){
      return 'paper'
    };
    
    if(randomComputerInput === 2){
      return 'scissors'
    };
    
    }; //end of random computer input
    //console.log(getComputerChoice())
    
    //getting winner between user and computer
    const determineWinner = (userChoice, computerChoice) =>{
       //cheat code
       if(userChoice === 'bomb'){
            return 'User Won'
         };
    
    
      if(userChoice === computerChoice){
        return 'Game was a tie'
      };
       
    
       if(userChoice === 'rock'){
         if(computerChoice === 'paper'){
           return 'Computer Won'
         } else{
           return 'User Won'
         }
       };
    
       if(userChoice === 'paper'){
         if(computerChoice === 'scissors'){
           return 'Computer Won'
         } else {
           return 'User Won'
         }
       };
    
    
       if(userChoice === 'scissors'){
         if(computerChoice === 'rock'){
           return 'Computer Won'
         } else {
           return 'User Won'
         }
       };
    
    
    
    
    
    }; //end of winner between user and computer
    
    /*console.log(determineWinner('paper', 'rock')); 
    console.log(determineWinner('scissors', 'paper')); 
    console.log(determineWinner('rock', 'rock')); 
    */
    
    const playGame = () =>{
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log(`You Chose ${userChoice}`);
      console.log(`The computer chose ${computerChoice}`);
     console.log( determineWinner(userChoice, computerChoice))
    };
    
    playGame()