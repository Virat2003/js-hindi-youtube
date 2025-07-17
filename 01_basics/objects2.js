// const objectsss=new Object()

// const objectsss={}

// objectsss.id="123abc"
// objectsss.name="virat"
// objectsss.isLoggedIn=false

// console.log(objectsss);

const regularUser={
    email:"viratrane2616@gmail.com",
    userFullName:{
        userName:{
            firstname:"harshal",
            Lastname:"rane"

        }

    }
}
console.log(regularUser.userFullName.userName.firstname);
console.log(regularUser.userFullName.userName);


const obj1={1:"a", 2:"b", 3:"c"}
const obj2={4:"d", 5:"e", 6:"f"}
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);
// console.log(...obj1,...obj2);
// console.log();

const users=[{
    id:1,
    email:"viratrane.com"
}]
// console.log(users[1].email)


const objectsss={}

objectsss.id="123abc"
objectsss.name="virat"
objectsss.isLoggedIn=false

console.log(Object.keys(objectsss));
console.log(Object.values(objectsss));



