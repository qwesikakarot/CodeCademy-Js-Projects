//getiimg sleep ours during the day
const getSleepHours = (day) => {
    day = day.toLowerCase();
    
      switch(day){
          case 'monday':
          return 8
          break;
    
                case 'tuesday':
          return 8
          break;
    
                case 'wednesday':
          return 8
          break;
    
                case 'thursday':
          return 8
          break;
    
                case 'friday':
          return 8
          break;
    
                case 'saturday':
          return 8
          break;
    
                case 'sunday':
          return 8
          break;
    
          default:
          return 'ERROR!! INPUT ANY DAY OF THE WEEK'
          break;
    
      };
    
    }; // end of getiimg sleep ours during the day
    //console.log(getSleepHours('monday'))
    
    
    //getting actual sleep hours of the week
    const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +  getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    ;//end of getting actual sleep hours of the week
    
    
    // getting idealsleep hours
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    }; // end of getting ideal sleep hours
    /*
    console.log(getActualSleepHours()); 
    console.log(getIdealSleepHours()); 
    */
    
    //calculatng actual sleep hours and ideal sleep hours
    const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours =  getIdealSleepHours();
    
      if(actualSleepHours === idealSleepHours){
        return `You got ${idealSleepHours} hours of sleep during this week which is enough for the week`
      };
    
        if(actualSleepHours > idealSleepHours){
        return `You got ${actualSleepHours} hours of sleep during this week which is more sleep than needed`
      };
    
    
    if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
    
    };//end of calculatng actual sleep hours and ideal sleep hours
    
    let calculateSleep = calculateSleepDebt();
    
    console.log(calculateSleep);