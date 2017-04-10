 /*function calcTotal() {
    var itemTotal = 0;
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
      (item1.checked) ? (itemTotal += 50) : (itemTotal += 0);
      (item2.checked) ? (itemTotal += 100) : (itemTotal += 0);
      (item3.checked) ? (itemTotal += 150) : (itemTotal += 0);
      (item4.checked) ? (itemTotal += 250) : (itemTotal += 0);
  var salesTaxRate = 0.06;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert("Your order total is $" + orderTotal)
}
document.getElementById("submit").addEventListener("click", calcTotal, false);


function calcTotal(){
  var itemTotal=0;
  var items = document.getElementsByTagName("input");
    for (var i=0; i<5; i++){
      if(items[i].checked){
        itemTotal += (items[i].value *1);
      }
    }
  document.getElementById("total").innerHTML = "Your order total is $ " + itemTotal.toFixed(2);
        
}


var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener){
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent){
  submitButton.attachEvent("onclick", calcTotal);
}




var submitButton = document.egElementById("sButton");
if (submitButton.addEventListener){
    submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent); { 
    submitButton.attachEvent("onclick", calcTotal);
    
}
*/
 /*      
//array storing
        var products = ["Pusher ($50)", "Pusher Complete ($100)", "Cruiser ($150)", "Cruiser Complete ($250)"];
        var labels = document.getElementsByTagName("labels");
       function processProducts() {
           for( var i = 0; i < 4; i++) {
             labels[i].innerHTML = products[i];
           }
       }
       
       if (window.addEventListener) {
         window.addEventListener("load", processProducts, false);
       } else if (window.attachEvent) {
         window.attachEvent("onload", processProducts);
       }
       
   */    
function calcTotal(){
  var itemTotal=0;
  var items = document.getElementsByTagName("input");
    for (var i=0; i<5; i++){
      if(items[i].checked){
        itemTotal += (items[i].value *1);
      }
      
    }
  itemTotal += (.06 * itemTotal)
  document.getElementById("total").innerHTML = "Your order total is $ " + itemTotal.toFixed(2);
        
}


var submitButton = document.getElementById("submit");
if (submitButton.addEventListener){
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent){
  submitButton.attachEvent("onclick", calcTotal);
}
