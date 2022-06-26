// Using a loop print all odd numbers up to and including n. Don’t include 0.
// for(var i=1;i<=13;i++){

//     if(i%2==1)

//     console.log(i);
// }

// ...........Print the sum of all even numbers in a range from a to b. (Including a,b......
// let sum=0;
// for( let i=2;i<=8;i++){
//     if(i%2==0){
//         sum=sum+i;
//     }
// }
// console.log(sum);
//
// ********Write a program to read the first and last digit of a number**********
// let num =123;
// Fdigit=num%10;
// Ldigit=Math.floor(num/100);
// while(num!=0){

// }
// let num=243;
//         let x=num%10
//         let y=Math.floor(num/100)
//         // return (y+" "+x);
// console.log(y+" "+x);

// ++++++++++Check whether the given number is an armstrong number or not.+++++++++++++++++

// let num=143;
// let Fdigit=num%10;
// let Sdigit=Math.floor(num/10)%10;
// let Ldigit=Math.floor(num/100);
// if(Fdigit**3+Sdigit**3+Ldigit**3==num){
//     console.log("armstrong No");
// }
// else{
//     console.log("not a armstrong no");
// }

// 3333333333Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even 3333333333333333333

//

// 55555555555555  Take a number and return all the even digits of the number   55555555555555
// let num=2367;
// let A=num%10;
// let B=Math.floor(num/10)%10;
// let C=Math.floor(num/100)%10;
// let D=Math.floor(num/1000);
// for(i=D;i<=A;i++)
// {
// if(i%2==0){
//     console.log(i);
// }
// else{
//     console.log("odd nos");
// }
// }
// if(A%2==0 && B%2==0 || C%2==0 && D%2==0)
// {
//     console.log(A);
//     console.log(B);
//     console.log(C);
//     console.log(D);

// }
// else{
//     console.log("odd numbers")
// }
// if(A%2==0){
// console.log(A);
// }
// else if(B%2==0){
//     console.log(B)
// }
// else if(C%2==0){
//     console.log(C)
// }
// else if(D%2==0){
//     console.log(D)
// }
// else{
//     console.log("nothing")
// }
// Check whether the given number is equal to its reverse number or not

// let num=111;
// let Fdigit=num%10;
// let Sdigit=Math.floor(num/10)%10;
// let Ldigit=Math.floor(num/100);
// let ReverseNo=Fdigit*100+Sdigit*10+Ldigit;
// if(num==ReverseNo){
//     console.log("Equal")
// }else{
//     console.log("NOt Equal")
// }

//
// let num=1;
// while(num<10)
// {
//     if(num%2!=0){
//         console.log(num);
//     }
//     else{
//         console.log("even")
//     }
//     num++;
// }
// JavaScript Program to Find the Largest Among Three Numbers using if else

//

// JavaScript Program to Find the Largest Among Three Numbers using for loop
//
// JavaScript Program to Add Two Numbers
// let num1=12;
// let num2=20;
// let num3;
// console.log(num3=num1+num2);

// JavaScript Program to Find the Square Root using if else
//
// JavaScript Program to Swap Two Variables
// var X=23;
// var Y=24;
// var temp;
// temp=X;
// X=Y;
// Y=temp;
// console.log(Y);

// JavaScript Program to Find the Largest Among Three Numbers using for loop
// let a;
// if(a%2==0 && a<=10)
// Numbers
// for(let i=0;i<=100;i++)
// JavaScript Program to Find the Largest Among Three Numbers using for loop
// WRITE A PROGRAM TO CHECK WHETHER A GIVEN YEAR IS A LEAP YEAR OR NOT
// let year =100;

// if ((year % 4==0) && (year % 100!=0) || (year % 400==0) ) {
//     console.log('leap year');
// } else {
//     console.log(' not a leap year');
// }
// ternary OPERATOR
// let age=10;
// console.log( age=(age>=18 ) ? "can vote" : "can not vote");
// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"

// iIf there are two numbers same as biggest than also print "None of them is biggest"

// let num1=80;
// let num2=45;
// let num3=40;
// switch(num1>num2 && num1>num3)
// {
//     case true :
//         console.log(num1);
//         break;
// }
// switch(num2>num1 && num2>num3)
// {
//     case true:
//         console.log(num2);
//         break;
// }
// switch(num3>num1 && num3>num2)
// {
//     case true:
//         console.log(num3);
//         break;
// }
// switch(num1==num2 || num2==num3 || num3==num1)
// {
//     case true:
//          console.log("None of them is biggest");
// }

// FACTORIAL OF A Number USING WHILE LOOP

//     for(i=2;i<=19;i++){
//   if(i%2==0){
//     console.log("not a prime");
//   }
//   else{
//     console.log(i)
//   }

// }

//   let n=20;
// let charge=0;
// if (n>15){
// charge =  (n-15)*5+5*0+5*3+5*4;
//   console.log(charge);
// }
// else if(n>10){
//   charge=(n-10)*4+5*0+5*3;
//   console.log(charge);
// }
// else if(n>5){
//   charge=(n-5)*3+5*0;
//   console.log(charge);
// }
//   else{
//     charge=5*0;
//     console.log(charge);
//   }
//   function x(num,fact){
//    if (num>0){
//     fact=fact*num;
//     return x((num-1),fact);

//    }

//    return fact;
//   }
//  console.log(x(5,1));
// function product(a,b){
//   let num1=a;
//   let num2=b;
//    let proD=1;
//  for(let i=num1; i<num2; i++){
//  //   if((num1+i)%2==0 && Math.floor((num1+i)/10)%10==4){

//  //     proD=proD*i;
//  //   }
//    let SLDigit=Math.floor((num1+i)/10);
//    if( (num1+i)%2 == 0 && SLDigit==4){
//      proD=proD*(num1+i);
//      return proD;
//    }
//    else {
//      return 0;
//    }
//  }

//  }
//  console.log(product(40,80));
// declaring a function named greet()
// function greet() {
//   console.log("Hello there");
// }
// greet();
// function (a){

//   let i=1
//   while(i<=10){
//     let T;
//     a=b;
//     b=T;

//   }

//   return T ;
// }
// console.log((10));
// function range(a,b,count){
//   console.log(a);

//   if(count<10){
//     let c=a+b;
//     // a=b;
//     // b=c;
// range(b,c,count+1);

//   }
// }
// range(1,1,1)
// function numOfDigit(number, count) {
//   // console.log(number);
//   if (number > 0) {
//     count++;
//     number = Math.floor(number / 10);
//     return numOfDigit(number, count);
//   }
//   console.log(count);
// }
// numOfDigit(4896, 0);
// 
// 
// function odd(b,i){
//  if(i>b) {
//   return
//  }
  
// if( i%2 !=0){
//   console.log(i);
  
   
  
 
// }
// odd(b,i+1);

// }
// odd(10,1);
// function odd(){
  
// for(let i=1;i<10;i++){
//   if(i%2!=0){
//     console.log(i);
    
//   }
//   // return odd();
// }


// }
// odd()


// function hello(h){
//   let a=h;
//   return a;
// }

// let K=hello("HELLO");
// console.log( K);

// program to print the text
// declaring a function
// function  text(name){
// console.log("hello   "+name);
// }

// text("Kumar");




// program to add two numbers using a function
// function fibo(first,second,counter){
    
//     if(counter<10){
//         console.log(first);
//         let c=first+second;
//         return fibo(second,c,counter + 1);

//     }
   
//   }
//   fibo(1,1,1)



// 


// let MyFun=(a,b)=>{
//     // console.log(a*b);
//     return a*b;
// }
// let Z=MyFun(8,9);
// console.log(Z)
// let Z=function range(a,b){
    
// if(a>=b){
    
//     return 50;
// }
// else{
//     console.log(a)
//     return range(a+1,b);
// }
// }
// // range(40,50);

// console.log(Z(40,50));

for(let i=1;i<=10;i++){
    // console.log(i);
    if(i%2!=0){
        console.log(i);
    }
}


