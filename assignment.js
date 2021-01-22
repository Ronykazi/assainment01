


function kilometerToMeter(kilo){
    var miter = kilo*100 ;
    
    return miter;
}



function budgetCalculator(ghori,mobile,laptop){
    
    var price1 = ghori*50;
    var price2 = mobile*100;
    var price3 = laptop*500;

    var total = price1+price2+price3;
    var result = total;


    return total;
}







function hotelCost(day){


var price = 0;

if( day<10 ){
    price = day*100;
}

else if(day<=20){
    var first10 = 10*100;
    var remain = day-10;
    var secend10 = remain*80;
    price = first10 + secend10;
}


else{
    var first10 = 10*100;
    var secend10 = 10*80;
    var remain = day-20;
    var third10 = remain*50;

    price = first10 + secend10 + third10 ;
}

return price;
}

console.log(hotelCost(21))