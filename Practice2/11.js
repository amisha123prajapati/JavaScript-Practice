//Maps

let cityMap=new Map();
cityMap.set('Gurgaon','Haryana');
cityMap.set('Chennai','Tamil Nadu');
cityMap.set('Jamshedpur','Jharkhand');

console.log(cityMap);

console.log(cityMap.get('Jamshedpur'));
console.log(cityMap.get('Chennai'));

console.log(cityMap.size)
console.log(cityMap.size)

console.log(cityMap.has('Hyderabad'));


for(let cityValue of cityMap.keys()){
    console.log(cityValue);
}


cityMap.forEach((key,value)=>{
console.log(key+""+value)
})

for(let [key,value] of cityMap){
    console.log(key+""+value)
}

for(let mapEntry of cityMap.entries()){
    console.log(mapEntry[0]+" "+mapEntry[1])
}

cityMap.delete("Chennai");
console.log(cityMap);