"use strict";
// typescript ------- javascript ------ browser
// program 1 
// function additionD(x,y){
//     console.log(x+y)
// }
// additionD(12,5)
// function add(x:number,y:number){
//     console.log( x + y)
// }
// add(15,5)
// add(12,5)
// program 2 
// let q1:number
// q1 = '5'
// let q1 = 'chinmay'
// q1 = 5
// program 3 
// let fname = 'chinmay'
// fname = 54
// let lastname:string;
// // lastname = '45'
// lastname = 'kishan'
// program 4 
// let ya:true
// ya = 23
// let ya2:boolean;
// ya2 = false
// program 5 
// let student = {
//     firstname:'ram',
//     lastname:'rao'
// }
// student.firstname = 'mayuri'
// let student2 :{
//     firstname:string,
//     lastname:string,
//     age:number
// }
//  student2 = {
//     firstname:'chinmay',
//     lastname:'deshnapnde',
//     age:25
// }
// let d = 19
// d = '15'
// program 6 
// let names:string[];
// names = ['chinmay','deshpande','shirish']
// names.forEach(function(el){
//     el.toUpperCase()
// })
// program 7 
let info2;
info2 = [7709255670, 'kishan', 'kathewad'];
console.log(info2);
// program 8 
// enum Roles {
//     admin2,
//     customer2,
//     student2,
//     manager2
// }
// if(Roles.customer2){
//     console.log('customer2')
// }
// program 9 
var Roles;
(function (Roles) {
    Roles[Roles["kishan"] = 0] = "kishan";
    Roles[Roles["ajinkya"] = 1] = "ajinkya";
    Roles[Roles["vijay"] = 2] = "vijay";
    Roles[Roles["ajay"] = 3] = "ajay";
})(Roles || (Roles = {}));
if (Roles.kishan) {
    console.log('kishan');
}
