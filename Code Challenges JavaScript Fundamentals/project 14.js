// Write your function here:

const tipCalculator = (quality, total) => {
    switch (quality) {
      case "bad":
        return (total = total * 0.05);
        break;
  
      case "ok":
        return (total = total * 0.15);
        break;
  
      case "good":
        return (total = total * 0.20);
        break;
  
      case "excellent":
        return (total = total * 0.30);
        break;
  
      default:
        return (total = total * 0.18);
        break;
    }
  };
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!