"use strict";
// typescript inferes the type of the variable. It helps to avoid errors
var userId = 5;
var userName = 'Max';
var isTrue = true;
//but if we assign a different type to the variable, typescript will throw an error
// userName = 5
// userId = 'Max'
// isTrue = 1
// we can also assign any type to a variable
var anyType;
anyType = 5;
anyType = 'Max';
anyType = true;
// it is better to avoid using any type
// too much inference can also be a problem. It is better to be explicit.
// for example let userId = 5 is better than let userId:number = 5
// same goes for all the other variables
console.log(userId, userName, isTrue, anyType);
