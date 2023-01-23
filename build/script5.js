"use strict";
// // program 1
// class Person {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// let kishan = new Person('kishan')
// // public private protected
// class Personc {
//     public name: string
//     constructor(nm: string) {
//         this.name = nm
//     }
//     public displayname() {
//         console.log(this.name) 
//     }
// }
// let amol = new Personc('amol')
// amol.displayname()
// console.log(amol.name)
// // private
// class PersonD {
//     private Fname: string
//     constructor(nm: string) {
//         this.Fname = nm
//     }
//     public displayname() {
//         console.log(this.Fname)
//         this.displaygreet()
//     }
//     private displaygreet() {
//         console.log('hello i am new to city')
//     }
// }
//  let anand = new PersonD('anand')
// anand.displayname()
// //anand.displaygreet()
// anand.name = 'kk'
// program 3 
// class PersonE{
//     age:number
//     constructor(ag:number){
//         this.age = ag
//     }
// }
// let kk = new PersonE(77)
// or
// class PersonE{
//     constructor(private age:number){}
// }
// let kk = new PersonE(77)
// program 4 
// readonly
// class PersonF{
//     public readonly name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     public getname():string{
//         return this.name
//     }
// }
// let ankita = new PersonF('ankita')
// ankita.getname()
// ankita.name = 'a'
// or
// class PersonF{
//     public name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     public getname():string{
//         return this.name
//     }
// }
// let ankita = new PersonF('ankita')
// ankita.getname()
// ankita.name = 'a'
// program 5 
// interface worldbank {
//     loan(): number
//     save(): number
// }
// class SBI implements worldbank {
//     public loan(): number {
//         return 10
//     }
//     public save():number {
//         return 20
//     }
//     public cityname():string{
//         return 'pune'
//     }
// }
// class PNB implements SBI {
//     public loan(): number {
//         return 10
//     }
//     public save():number {
//         return 20
//     }
//     public cityname():string{
//         return 'jaipur'
//     }
// }
// let SBIPUNE = new SBI()
// console.log(SBIPUNE.loan())
// console.log(SBIPUNE.save())
// console.log(SBIPUNE.cityname())
// let PNBPUNE = new PNB()
//  console.log(SBIPUNE.loan())
//  console.log(SBIPUNE.save())
//  console.log(SBIPUNE.cityname())
