
/*======================
  1.  problem solve -start 
  ======================*/

  function seerToMon(seer){
    if (seer < 0) {
        console.log("please Enter  positive value ")
    }else {
        let mon = seer / 40;
        return mon;
    }
}

let result = seerToMon(40);
console.log(result)

/*======================
  1.  problem solve -end  
  ======================*/



/*======================
  2.  problem solve -start 
  ======================*/

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    let pershirt = 100;
    let perPant = 200;
    let perShoe = 500;

    if (shirtQuantity <= 0 || pantQuantity <= 0 || shoeQuantity <= 0 ) {
        console.log("Please Enter your valid quantity ")
    } else {
        let shirtCost  = pershirt * shirtQuantity
        let pantCost  = perPant * pantQuantity
        let shoeCost  = perShoe *  shoeQuantity
        let totalCost = shirtCost + pantCost + shoeCost;
    
        return totalCost;
    }
    

}

let totalSalesResult = totalSales(1,2,1);
console.log(totalSalesResult)

/*======================
  2.  problem solve -end 
  ======================*/

 
  /*======================
  3.  problem solve -start 
  ======================*/

function deliveryCost(tshirtQuantity){
    let firstHundredTshirtCost = 100;
    let secondtHundredTshirtCost = 80;
    let thirdHundredTshirtCost = 50;

    if (tshirtQuantity <= 0 ) {
        console.log("Please enter you valid quntity")
    }else{
        if (tshirtQuantity <= 100) {
            return  tshirtQuantity * firstHundredTshirtCost;
        }
        else if (tshirtQuantity <= 200) {
           let secondRestTshirt = tshirtQuantity - 100;
           let firstShirtCost = firstHundredTshirtCost * 100;
           let  secondtHundredTshirtCostTotal = firstShirtCost +   secondtHundredTshirtCost * secondRestTshirt;
           return secondtHundredTshirtCostTotal;        
        }
        
        else if (tshirtQuantity <= 300) {
            let thirdRestTshirt = tshirtQuantity - 200;
            let firstShirtCost = firstHundredTshirtCost * 100;
            let secondShirtCost = secondtHundredTshirtCost * 100;
            let  thirdtHundredTshirtCostTotal = firstShirtCost + secondShirtCost +  thirdHundredTshirtCost * thirdRestTshirt;
            return thirdtHundredTshirtCostTotal;         
         }
    }
    
}

let tshirtPriceResult = deliveryCost(101)
console.log(tshirtPriceResult)

  /*======================
  3.  problem solve -end 
  ======================*/



  /*======================
  4.  problem solve -start
  ======================*/


let freinds = ['alamin', 'kamrul', 'rocky','sanjaf'];
function perfectFriend(arr){
    let perfectFriendName = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.length == 5) {
            perfectFriendName = element;
            break;           
        }        
    }

    if (perfectFriendName == '') {
        console.log("not found perfect freind ");
    }else {
        return perfectFriendName;
    }   
}


let perfectFriendResult  = perfectFriend(freinds);
console.log(perfectFriendResult)
  /*======================
  4.  problem solve -end
  ======================*/
