let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnersAge = 16;

if(runnersAge > 18){
  console.log(raceNumber + 1000)
};


if(runnersAge > 18 && registeredEarly === true){
  console.log(`Runners over 18yrs and register early, Your Race will start at 9:30am with race number ${raceNumber}`)
};

if(runnersAge > 18 && registeredEarly === false){
  console.log(`Runners over 18yrs and did not register early, Your Race will start at 11:00am with race number ${raceNumber}`)
};

if(runnersAge < 18 && registeredEarly === true || registeredEarly === false){
  console.log(`Runners under 18yrs and did not register early or register early, Your Race will start at 12:30am with race number ${raceNumber}`)
};