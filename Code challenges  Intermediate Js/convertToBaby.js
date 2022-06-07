// Write your code here:

const convertToBaby = arr => {
    let reversed = []
    for( let i = 0; i < arr.length; i++){
      reversed.push('baby ' + arr[i])
    }
    return reversed
  }
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 