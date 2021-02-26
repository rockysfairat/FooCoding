let listOfItems = [{
    "product": "Milk, 1L carton",
    "best_before": "2018-10-04",
    "price": 15.5
  },
  {
    "product": "Milk, 1L carton",
    "best_before": "2018-10-04",
    "price": 15.5
  },
  {
    "product": "Eggs 12pcs",
    "best_before": "2018-10-04",
    "price": 35.0
  },
  {
    "product": "Swedish meatballs",
    "best_before": "2018-10-25",
    "price": 22.0
  }]
  
  console.log(JSON.stringify(listOfItems));
  console.log(listOfItems);
  
  function getListOfPrices() {

    let pricesArr = [];
  
    for (let i = 0; i < listOfItems.length; i++) {
      pricesArr.push(listOfItems[i].price);
    }
    return pricesArr;
  }
  

  // 1. The lowest price item(s):
  
  function lowPrices() {

    let min = Math.min(...getListOfPrices());

    let lowestPrice = [];
  
    for (let i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i].price == min) {
            lowestPrice.push(listOfItems[i]);
        } 
    }
    return JSON.stringify(lowestPrice);
  }
  
  
  // 2. The highest price item(s):
  
  function highPrices() {

    let max = Math.max(...getListOfPrices());

    let biggestPrice = [];
  
    for (let i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i].price == max) {
            biggestPrice.push(listOfItems[i]);
        }
    }  
    return JSON.stringify(biggestPrice);
  }
  
  console.log(lowPrices());
  console.log(highPrices());