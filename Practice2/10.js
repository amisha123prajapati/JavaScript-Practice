//slice,splice

//let myArr = [34,21,16,17,21,90];
//let newArr= myArr.slice(1,4);

//console.log(newArr);
//console.log(myArr);

/*myArr.splice(1,3,'a','b','c');
console.log(myArr);



myArr.reverse();
console.log(myArr);


myArr.sort();
console.log(myArr);*/


//console.log(myArr.indexOf(21));
//console.log(myArr.lastIndexOf(21));

//filter

let myArr = [24,21,45,22,21,10];
newArr=myArr.filter(item=>{
    return(item%2==0)
})
console.log(newArr);



//some and every

let isSomeEven=myArr.some(item=>{
    return(item%2==0)
})

console.log(isSomeEven);


let isEveryEven=myArr.every(item=>{
    return(item%2==0)
})

console.log(isEveryEven);


