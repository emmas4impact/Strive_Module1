/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/
//Exercise 1
/* const area = function(a,b){

    return a*b


}

console.log('The Area is: '+area(11,12))

//Exercise 2

const crazySum = function(num1, num2){
    let num3=num1

    if(num1===num2){
        return num1+num2+num3
    }else{
        return num1 + num2
    }

    
}
console.log('The sum are the same: '+crazySum(3,3));
console.log('The sum are different: '+crazySum(3,2));

//Exercise 3
const crazyDiff = function(diff1, diff2){
    diff2 =19

    if(diff1>diff2){
        return (diff1-diff2) * 3
    }else{
        return diff1 - diff2
    }

    
}
console.log('The Absoulte different is greater than 19: '+crazyDiff(25,19));
console.log('The aboulute diff is less than 19: '+crazyDiff(19,19));

//Exercise 4 boundary 
const boundary = function(n){
    
    if((20 <= n && n <=100) ||( n===400)){
        return true
    }else{
        return false
    }

    
}
console.log(boundary(200))

//Exercise 5

const strivify = function(s){
    
    if(s.startsWith("Strive")){
        return 'Strive'
    }else{
        return 'Strive '+ s
    }

    
}
console.log(strivify("Strivesuper"))

//Exercise 6
const check3and7 = function(positvNum){
    
    if((positvNum%3===0) && (positvNum % 7 ===0)){
        return "Multiple of 3 and 7"
    }else if(positvNum%3===0){

        return "Multiple of 3"
    }else if(positvNum%7===0){
        return "Multiple of 7"

    }else{
        return "Please be realistic!"
    }


    
}
console.log(check3and7(2))

//Exercise 7

const reverseString = function(str){
    
    return str.split(" ").reverse().join(" ");

    
}
console.log(reverseString("H E L L O"))

//Exercise 8
const upperFirst = function(upCase){
    let splitStr = upCase.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
    
   

    
}
console.log(upperFirst("where are you going"))

//Exercise 9

const cutString = function(strCut){
   //strCut= "Strive"
    let result = strCut.substring(1,strCut.length-1)
    
    return result
   

    
}
console.log(cutString("Strive")) */


//Exercise 10

const giveMeRandom = function(rand){
    let array = [];

    while(rand -- >0){
        array.push(Math.round(Math.random() * 10) ) ;
        /* if(array.indexOf(r)=== -1){
            array.push(r);
            console.log("the value of r"+array.length); */
    }
  
     return array;
 
 }
 console.log(giveMeRandom(16))

 //Exercise 11

const checkArray = function(checkRand){
    

    for(let i=0; i>5; i++){
        //i(checkRand)
        checkRand = giveMeRandom(i)
        
        
    }
   


    
    
     return checkRand + checkRand;
    
     
 }
 console.log(checkArray(7))
