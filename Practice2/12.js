let solvedProblemIds =new Set();

solvedProblemIds.add("ABC");
solvedProblemIds.add("XYZ");
solvedProblemIds.add("YUI");
solvedProblemIds.add("ABC");


console.log(solvedProblemIds);


console.log(solvedProblemIds.has("TRY"));
console.log(solvedProblemIds.size)
solvedProblemIds.delete("ABC");
console.log(solvedProblemIds.size)


for(let problemId of solvedProblemIds){
    console.log(problemId);
}

for(let [key,value] of solvedProblemIds.entries()){
console.log(key+""+value);

}

solvedProblemIds.forEach((key,value)=>{
    console.log(key+""+value);
})

let newArray = [...solvedProblemIds];

console.log(newArray);

newArray = Array.from(solvedProblemIds);
console.log(newArray);








