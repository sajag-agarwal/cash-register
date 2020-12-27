var billValue = document.querySelector("#bill-ip");
var cashValue = document.querySelector("#cash-ip");

var billQuery = document.querySelector("button");
var displayResult = document.querySelector("#display-result");

var twothousand = document.querySelector("#twothousand");
var fivehundred= document.querySelector("#fivehundred");
var onehundred= document.querySelector("#onehundred");
var twenty= document.querySelector("#twenty");
var ten = document.querySelector("#ten");
var five= document.querySelector("#five");
var one = document.querySelector("#one");


function clickEventHandler(){
    twothousand.innerText = 0;
    fivehundred.innerText = 0;
    onehundred.innerText = 0;
    twenty.innerText = 0;
    ten.innerText = 0;
    five.innerText = 0;
    one.innerText = 0;
    var billVal = billValue.value;
    var cashVal = cashValue.value;
    var val = cashVal - billVal;
    if(val<0){
        displayResult.innerText = "Cash value is smaller than bill value. Error observed."
    }
    else{
        while(val>0){
            if(Math.floor(val/2000)>0){
                twothousand.innerText = Math.floor(val/2000);
                val = val%2000;
            }
            else if(Math.floor(val/500) > 0){
                fivehundred.innerText = Math.floor(val/500);
                val = val%500;
                
            }
            else if(Math.floor(val/100) > 0){
                onehundred.innerText = Math.floor(val/100);
                val = val%100;
            }
            else if(Math.floor(val/20) > 0){
                twenty.innerText = Math.floor(val/20);
                val = val%20;
            }
            else if(Math.floor(val/10) > 0){
                ten.innerText = Math.floor(val/10);
                val = val%10;
            }
            else if(Math.floor(val/5) > 0){
                five.innerText = Math.floor(val/5);
                val = val%5;
            }
            else{
                one.innerText = val;
                val = 0;
            }
        }
        displayResult.innerText = "Return the following changes now:"
    }
}

billQuery.addEventListener("click", clickEventHandler);


