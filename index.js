// Problem no. 01 .

function mindGame(number){
    if(typeof number == "number"){
        const result = ((((number*3)+10)/2)-5);
    return result;
    }
    else{
        return "Please Enter The Valied Number"
    }
}

mindGame(5)
console.log(mindGame(33));

/*
    Here a function is used inside it using a condition to check whether the number is present or not and then multiply the input value by 3, multiply by 10, add, divide by 2 and divide by 5.
*/ 

// Problem no. 2

function evenOdd(name){
    if(typeof name == "string"){
        if(name.length % 2 === 0){
            return "even"
        }
        else{
            return "odd"
        }
    }else{
        return "plese enter the string parameter"
    }
}

evenOdd("dadu")
console.log(evenOdd("dadu"));

/*
Here a function is used inside it using a condition to check whether it is sting or not and then the condition is used to find out the odd and even number of characters in the input value.
*/ 
// Problem no. 3

function isLGSeven(number){

    const difference = number - 7;
    if(typeof number == "number"){
        if (difference < 7 && difference !== 0) {
            return difference;
        } else {
            return number * 2;
        }
        
    }
    else{
        return "Please Enter The Valied Number"
    }
}
isLGSeven(7);

console.log(isLGSeven(-15));

/*
Here a function is used to check whether the number is a number or not by using a condition inside it and then if the input value is less than 7 then that value is returned and if it is greater than 7 then the value is incremented by 2. Multiplied and returned
*/ 

// Problem No. 4


function findingBadData(array) {
    
    var negatives = [];
    
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                negatives.push(array[i]);
            }
        }
        return negatives.length;
    } else {
        return "please enter the valid array"
    }
    
}

var myArray =[4, -5, 0, 2, 22, -8, -10, -33];

console.log(findingBadData(myArray));

/*
Here is a function using a condition inside it to check if it is an array and then using a condition inside a loop to count the number of negative values in the input value.
*/ 

// Problem No. 5

function gemsToDiamond(num1, num2, num3){
    if(typeof num1 == "number" && typeof num2 == "number" && typeof num3 == "number"){
    firstFriend = num1 * 21;
    secondFriend =num2 * 32;
    thirdFriend = num3 * 43;
    }
    else{
        return "please enter the valid all number"
    }
    totalDiamond = firstFriend + secondFriend + thirdFriend;
            if (totalDiamond >= 2000) {
                return totalDiamond - 2000
            }
            else{
                return totalDiamond;
            }
    
}

gemsToDiamond( 1, 1, 1)

console.log(gemsToDiamond(20,200,50));

/*
Here a function is used to check if there are 3 value numbers or not using a condition inside it and then multiply the value of the 1st value by 21, the value of the 2nd value by 32 and the value of the 3rd value by 43 if that value is a multiple of 1000 or its If it is greater than 2000 then that value is returned and if it is less than a multiple of 1000 then that value is returned directly.
*/ 