// program 1 

// interface

// interface worldbank {
//     loan(): number
//     save(): number
// }

// class SBIs implements worldbank {
//     loan(): number {
//         return 10
//     }
//     save(): number {
//         return 20
//     }
//     branchname():string{
//         return 'kharadi pune'
//     }
// }

// let kharadi = new SBIs()
// console.log(kharadi.loan())
// console.log(kharadi.save())
// kharadi.branchname()


// program 2 


// interface student {
//     info2():string
// }

// interface teacher {
//     salary():number
// }

// class Personx implements student,teacher{
//     info2():string{
//         return 'maths science'
//     }
//     salary():number{
//         return 10000
//     }

// }

// class persony implements teacher{
//     salary():number{
//         return 10000
//     }
// }

// let amol = new Personx()
// amol.info2()
// amol.salary()

// let amolk = new persony()
// amolk.salary()

// program 2 
// extends

// interface worldbankB {
//     getcode():number
    
// }

// class RBI implements worldbankB{
//     getcode():number{
//         return 10
//     }
// }

// class PNBS extends RBI{
//     loan():number{
//         return 10
//     }
//     save():number{
//         return 20
//     }
// }
// let nagpur = new PNBS()
// nagpur.loan()
// nagpur.save()
// nagpur.getcode()

// program 3 

// interface worldbank{
//     getcode():number
// }

// class RBI implements worldbank{
//     getcode():number{
//         return 10
//     }
// }

// class PNB extends RBI{
//     loan():number{
//         return 20
//     }
//     save():number{
//         return 30
//     }
//     // same method name , same signature but diffrenet class
//     getcode():number{
//         super.getcode()
//         return 200
//     }
    
// }
// let kishan = new PNB()
// kishan.save()
// kishan.loan()
// kishan.getcode()


// no object from abstarct class

// can create object of abstarct class 

abstract class worldbank{
    abstract loan():number
    abstract save():number

    country():string{
        return 'india'
    }
}