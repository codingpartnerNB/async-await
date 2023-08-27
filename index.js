// Using Promise =====

// console.log("Person 1 : shows ticket");
// console.log("Person 2 : shows ticket");

// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("tickets");
//     },3000);
// });

// const getPopcorn = promiseWifeBringingTickets.then((tick)=>{
//     console.log(`wife : I have ${tick}`);
//     console.log("wife : I am hungry");
//     return new Promise((resolve,reject)=> resolve(`popcorn`));
// });

// const getButter = getPopcorn.then((pop)=>{
//     console.log(`husband : I got some ${pop}`);
//     console.log("wife : I need butter on my popcorn");
//     return new Promise((resolve,reject)=> resolve(`butter`));
// });

// const getColdDrinks = getButter.then((butter)=>{
//     console.log(`husband : I got some ${butter} on popcorn`);
//     console.log("wife : I need cold drink");
//     return new Promise((resolve,reject)=>resolve(`cold drink`));
// });

// getColdDrinks.then((coldDrink)=>{
//     console.log(`husband : I got ${coldDrink}`);
//     console.log("wife : Lets go we are getting late");
//     console.log(`Person 3 : shows tickets`);
// })

// console.log("Person 4 : shows ticket");
// console.log("Person 5 : shows ticket");




// Using Async/Await =====

// console.log("Person 1 : shows ticket");
// console.log("Person 2 : shows ticket");

// const preMovie = async()=>{
//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("tickets"),3000);
//     });

//     const getPopcorn = new Promise((resolve,reject)=>resolve("popcorn"));
//     const addButter = new Promise((resolve,reject)=>resolve("butter"));
//     const getColdDrinks = new Promise((resolve,reject)=>resolve("cold drink"));

//     let ticket = await promiseWifeBringingTickets;
    
//     console.log(`wife : I have ${ticket}`);
//     console.log("wife : I am hungry");

//     let popcorn = await getPopcorn;

//     console.log(`husband : I got some ${popcorn}`);
//     console.log("wife : I need butter on my popcorn");

//     let butter = await addButter;

//     console.log(`husband : I got some ${butter} on popcorn`);
//     console.log("wife : I need cold drink");

//     let coldDrink = await getColdDrinks;

//     console.log(`husband : I got ${coldDrink}`);
//     console.log("wife : Lets go we are getting late");

//     return ticket;
// }

// preMovie().then((tick)=>console.log(`Person 3 : shows ${tick}`));

// console.log("Person 4 : shows ticket");
// console.log("Person 5 : shows ticket");




// Using Promise.all

console.log("Person 1 : shows ticket");
console.log("Person 2 : shows ticket");

const preMovie = async()=>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("tickets"),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve("popcorn"));
    const getCandy = new Promise((resolve,reject)=>resolve("candy"));
    const getCoke = new Promise((resolve,reject)=>resolve("coke"));

    let ticket = await promiseWifeBringingTickets;
    
    let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);

    console.log(`${popcorn} ${candy} ${coke}`);

    return ticket;
}

preMovie().then((tick)=>console.log(`Person 3 : shows ${tick}`));

console.log("Person 4 : shows ticket");
console.log("Person 5 : shows ticket");
