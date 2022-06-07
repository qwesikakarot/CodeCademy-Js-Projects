let menu = {
    _meal : 'food',
    _price : 8,
  
  
  
    set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }
  },
  
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
  },
  
  
  get todaysSpecial(){
    if(this._meal && this._price){
      return 'Today’s Special is Spaghetti for $5!';
    }else{
      return 'Meal or price was not set correctly!'
    }
  }
  
  
  };
  
  /*menu.mealToCheck = 1;
  menu.priceToCheck = 'kick'
  console.log(menu._meal)
  console.log(menu._price)
  */
  console.log(menu.todaysSpecial)
  
  