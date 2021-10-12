/*let marks= new Array(100,200,40,68,20);
console.log(marks);
console.log(marks.length);
let num=Array(20,30,56,10);
console.log(num);
console.log(num.length);


let names=[ 45,"Akanksha" ,"Rashmi","Ankita","Alka" ];
console.log(names);
console.log(names.length);
console.log(names[2]);
names[2]="Rachna";
console.log(names);
console.log(names.length);
console.log(names[2]);

marks=new Array(42);
console.log(marks);
console.log(marks.length);

num=Array(20);
console.log(num);
console.log(num[0]);
console.log(num.length);



num=[30]
console.log(num);
console.log(num[0]);
console.log(num.length);*/


let marks=new Array(100,200,40,68,20);

/*for(let i=0; i<marks.length; i++)
{
    console.log(marks[i]);


}*/
let totalMarks =0;
/*for(let i=0; i<marks.length; i++)
{
    console.log(marks[i]);
    totalMarks +=marks[i];
}
console.log(totalMarks);*/

/*marks.map((individualMarks,index) =>{
    marks[index]=marks[index]*2;
    console.log(individualMarks);
    totalMarks +=individualMarks;
})
console.log(totalMarks);
console.log(marks);*/

marks =marks.map((indiviualMarks)=>{
    return indiviualMarks*2;
})
console.log(marks);





















