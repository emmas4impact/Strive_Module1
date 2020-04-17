// ASSIGNMENT RULES
// - All the answers must be in JavaScript
// - The solution must be pushed to the repository and be available for the tutors by the end of the day
// - You can ask for tutor's help
// - You can google / use StackOverflow BUT we suggest you to use just the material provided
// - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
// */
// ​
/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
const arrayNum = [3, 4, 6, 8, 9];


//Exercise 2

const myDetails ={
    firstName: "Emmanuel",
    lastName: "Adedeji",
    email: "emmans4destiny@gmail.com",
    age: 15,
   
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
if(myDetails.drivingLicense){
    console.log(mmyDetails.drivingLicense);
}else{
    myDetails.drivingLicense=true;
    console.log(myDetails); //Safe
}

//Exercise 4:  Remove from the previously created object the age 

delete myDetails.age;
console.log(myDetails);

//Exercise 5: Create a second object with name, surname, email address and verify that this object has a different email address

const myDetails2 ={
    firstName: "Emmanuel",
    lastName: "Adedeji",
    email: "emman@emmanuel.com",
    age: 32,
   
};
const ObjectDiff =myDetails.email===myDetails2.email? "NOT DIFFERENT" : "DIFFERENT";

console.log(ObjectDiff);

/*
//EXercise 6: You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.

​*/
let totalShoppingCart = 60;
//console.log("Please enter total shopping cart: ");

let shippingCost= 10;
let totalAmount;

if(totalShoppingCart > 50){
    totalAmount = totalShoppingCart;
    console.log("Total amount is: "+totalAmount+ " No extra shipping cost!");
}else{
    totalAmount = totalShoppingCart + shippingCost;
    console.log("Total amount is: " +totalAmount +"Plus shipping cost!");


}
/*
//Exercise 7: 
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

let Blackfridaydiscount = 0.2;
let totalPurchaseDiscount = totalShoppingCart * Blackfridaydiscount;
let AmountAfterDiscount = totalShoppingCart - totalPurchaseDiscount;
let shippingDiscount = shippingCost * Blackfridaydiscount;
let finalShipping = shippingCost - shippingDiscount;

if(AmountAfterDiscount > 50){
    totalAmount = AmountAfterDiscount;
    console.log("Total amount is: "+totalAmount+ " Happy Black friday No shipping cost!");
}else{
    totalAmount = AmountAfterDiscount + finalShipping;
    console.log("Total amount is: " +totalAmount +" We are happy to reduce shipping cost! Happy Black Friday!!");



}

/*
//Exercise 8: Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.

*/
const myCar1 ={
    Brand: "BMW",
    Model: "X5",
    LicensePlate: "ABC-123",
    
   
};
const myCar2={};
const myCar3={};
const myCar4={};
const myCar5={};
Object.assign(myCar2,myCar1);
myCar2.LicensePlate="UPG-786";
Object.assign(myCar3,myCar1);
myCar3.LicensePlate="FPG-986";
Object.assign(myCar4,myCar1);
myCar4.LicensePlate="UHG-706";
Object.assign(myCar5,myCar1);
myCar5.LicensePlate="FFF-586";
/* console.log(myCar1);
console.log(myCar2);
console.log(myCar3);
console.log(myCar4);
console.log(myCar5); */

/*
//Exercise: 9 Create a new array called carsForRent containing all the cars from the previous exercise

*/
    const carsForRent =[myCar1,myCar2,myCar3,myCar4,myCar5]; //chNGE after listening to solution
    console.log(carsForRent);
/**
 * EXERCISE 10
Remove the first and the last car from the carsForRent array.
 * 
 */
    //carsForRent.splice(0,1);
    //console.log(carsForRent);
    carsForRent.pop();
  // console.log(carsForRent);

/**
 * EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
 * 
 * 
 */
console.log(carsForRent[0]);

/**
 * EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
 * 
 */
const carsForSale =[
    { Brand: 'VW', Model: 'X5', LicensePlate: 'FPG-986' },
    { Brand: 'Mercedes', Model: 'X5', LicensePlate: 'UHG-706' },
    { Brand: 'Skoda', Model: 'X5', LicensePlate: 'FFF-586' }];
totalCars = carsForRent.length + carsForSale.length;
console.log("Total cars "+totalCars);

/**Exercise 13
 * Print in the console the data from each car in the carsForSale array
 */
console.log(carsForSale);