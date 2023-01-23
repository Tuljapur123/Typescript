"use strict";
// class => access modifier
// program 1
// class student {
//     firstname:string
//     rollno:number
//     constructor(fn:string,rl:number){
//         this.firstname = fn
//         this.rollno = rl
//     }
//     display():string{
//         return this.firstname
//     }
// }
// let kishan = new student('kishan',25)
// console.log(kishan)
// console.log(kishan.display())
// program 2 
// class student {
//     private firstname1:string
//     public rollno1:number
//     public constructor(fn:string,rn:number){
//         this.firstname1 = fn
//         this.rollno1 = rn
//     }
//     getname():string{
//         console.log(this.firstname1)
//         return this.firstname1
//     }
// }
// let poorva = new student('poorva',123)
// console.log(poorva)
// console.log(poorva.rollno1)
// console.log(poorva.getname())
// console.log(poorva.firstname1)
// program 3 
// class student {
//     private firstname:string
//     public rollno:number
//     public constructor(fn:string,rn:number){
//         this.firstname = fn
//         this.rollno = rn
//     }
//     public getname():string{
//         console.log(this.firstname)
//         this.info()
//         return this.firstname
//     }
//     private info():void{
//         console.log(`my firstname is${this.firstname} and my rollno is ${this.rollno}` )
//     }
// }
// let snehal = new student('snehal',245)
// console.log(snehal.rollno)
// let k1 = (snehal.getname())
// console.log(k1)
// program 4 
// class student {
//     public constructor(private fn:string,public rn:number){
//     }
//     public getname():string{
//         this.info()
//         console.log(this.fn)
//         return this.fn
//     }
//     private info():void{
//         console.log(`my firstname is ${this.fn} and my rollno is ${this.rn}`)
//     }
// }
// let kishan = new student('kishan',12)
// console.log(kishan)
// console.log(kishan.rn)
// let k = kishan.getname()
// console.log(k)
// program 5 
// class greet {
//     private name1:string
//     constructor(private name1:string){
//         this.name1 = name1
//     }
// }
// let greeting = new greet('mayuri')
// orr
//  class greet{
//     public constructor(private fn:string){}
//  }
//  let poorva = new greet('poorva')
// program 6 
// readonly
class student {
    constructor(name2) {
        this.name2 = name2;
    }
    setname(name2) {
        console.log(this.name2);
        return this.name2;
    }
}
let mayuri = new student('mayuri');
// console.log(mayuri)
let newname = mayuri.setname('vaishali');
console.log(newname);
// class student {
//     private readonly name2: string
//     public constructor(name2: string) {
//         this.name2 = name2
//      }
//     public setname(name:string){
//         console.log(this.name2)
//         return this.name2
//     }
//     public getname():string{
//         console.log(this.name2)
//         return this.name2
//     }
// }
// let mayuri = new student('mayuri')
// console.log(mayuri.getname())
