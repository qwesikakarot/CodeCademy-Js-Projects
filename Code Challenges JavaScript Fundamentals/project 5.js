/*
Write a function, finalGrade(). It should:

    take three arguments of type number
    find the average of those three numbers
    return the letter grade (as a string) that the average corresponds to
    return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100

0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'



*/








// Write your function here:
const finalGrade = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
  
    if (
      score1 < 0 ||
      score1 > 100 ||
      score2 < 0 ||
      score2 > 100 ||
      score3 < 0 ||
      score3 > 100
    ) {
      return "You have entered an invalid grade.";
    }
  
    if (average < 60) {
      return "F";
    }
  
    if (average < 70) {
      return "D";
    }
  
    if (average < 80) {
      return "C";
    }
  
    if (average < 90) {
      return "B";
    } else {
      return "A";
    }
  };
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(50, 50, 80)); // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
  