// function sayMyName(){
//     console.log("v");
//     console.log("i");
//     console.log("r");
//     console.log("a");
//     console.log("t");
    
// }
// sayMyName()

// function addTwoNumber(num1,num2){

// // const result=num1+num2
// // return result
//     // console.log(num1+num2);
//     // return num1+num2

// }

// const res =addTwoNumber(3,4)
// console.log(res);



// function userLoggedIn(username){
//     if(username==undefined){
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }
// const res=userLoggedIn()
// console.log(res);







// function userdetail(usernames="samy"){
//     if(usernames===undefined){
//         console.log("enter a username");
//         return
//     }
//     return `${usernames} just for logged In`
// }

// let resu=userdetail("viratrane")
// console.log(resu);















// function passBookDetails(enterdetails="aba"){
//     if(enterdetails===undefined){
//         console.log("enter a valid detailssss:");
//         return
        
//     }
//     return `${enterdetails} succesfully entered` 
// }
// let resss=passBookDetails("vishal")
// console.log(resss);




// function myCartPrice(num1,num2,...num3){
//     return num3
// }
// let rrrreesss=myCartPrice(100,2000,3000,455,788,323)
// console.log(rrrreesss);


// let user={
//     name:"virat",
//     surname:"rane",
//     price:1200
// }
// function myObject(anyObject){
//     console.log(`username is ${anyObject.name} and surname is ${anyObject.surname} and price is ${anyObject.price}`);
// }

// // myObject(user);

// myObject({
//     name:"hitesh",
//     surname:"chaudhary",
//     price:456
// }

// )



const array=[100,200,300,400,500]
function returnarray(getarray){
    return getarray[1]
}
console.log(returnarray(array));

let virrr={
    id:"123abc",
    add:"axnbasjcbajb"
}

function myfunc(anything){
console.log(`id is ${anything.id} and add is ${anything.add}`);

}
myfunc(virrr)

myfunc({
    id:"vishal",
    add:"ajchgasjch"
})