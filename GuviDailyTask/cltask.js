// // function property (name, age, email){
// //     this.name = name;
// //     this.age = age;
// //     this.email = email
// // }
// // let student1 = new property("magi", 23, "magi@gmail.com");
// // let student2 = new property("nisha", 25, "asd@gmail.com");


// // console.log(student1);
// // console.log(student2);
// // function property (name, age, email){
// //     this.name = name;
// //     this.age = age;
// //     this.email = email
// //      this.greet = function(){
// //         console.log(`hello! ${this.name}`);
// //      }
// // }
// // let s1 = new property("madhi");
// // console.log(s1);
// // function sayHello(name) {
// //    this.name= name;

// //    this.greet = function(){
// //       console.log(`Hello! wlocome ${this.name}`);
// //    }
// // }
// // let m1 = new sayHello("DHURUV");
// // console.log(m1);
// // function student(name, email, phone) {
// //    this.name= name;
// //    this.email = email;
// //    this.phone = phone;

// //    this.getDetails = function(){
// //       console.log(`Hello! wlocome ${this.name}`);
// //    }
// // }
// // let m2 = new getDetail("DHURUV", "dhuruv@gmail.com", 23578676);
// // m2.getDetails();
// function student (name, email, phone){

//    this.name =name;
//    this.email = email;
//    this.phone = phone;

//    this.sayhello = function () {
//       console.log(`hello welcome ${this.name} and email is ${this.email} and phone no is ${this.phone}`);
//    }
//    this.getName = function(){
//       console.log(`name: ${this.name}`);
//    }
//    this.getEmail = function(){
//       console.log(`Email: ${this.email}`);
//    }
//    this.getPhone = function(){
//     console.log(`Phone: ${this.phone}`);
//    }

// }
// // let m3 = new student("Nisha", "sdfg@dfgh", 23456);
// // m3.sayhello();
// let Details = [];
//  Details.push(new student("madhi", "sdf@asdf", 23455));
//  Details.push(new student("maddy", "sdf@asdf", 23455));
//  Details.push(new student("madhu", "sdf@asdf", 23455));
//  Details.push(new student("mahi", "sdf@asdf", 23455));
// //console.log(Details);

// console.log("details of all student");
// for(let students of Details){
//    students.sayhello();
//    students.getEmail();
//    students.getName();
//    students.getPhone();
//    console.log("   --------    ");
// }

let arrayNum = [3, 7, 4, 10, 2, 6];
console.log(arrayNum.map((value, index, array) => { 
    return value **3; 
}));
function discount(value){
    // /for( let i=0, i<=arrayNum.length; i++){
        if(value >= 5){
            console.log(value , "eligible for 10 % discount");
        }
        else{
            console.log(value, "eligible for 20% discount");
        }
    // /}
}
//let dis = 
arrayNum.map(discount);
// console.log(dis);
let numbers = [3, 4, 6, 7, 8, 9, 12, 10];

let div3 = numbers.filter((value=> {
    if(value%3 == 0) return true;
}));
console.log(div3);
let redVal = [15, 3, 1, 8, 9, 43];
console.log(redVal.reduce((previousValue, currentValue) =>  (previousValue + currentValue)));