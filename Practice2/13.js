//console.log(document.getElementsByTagName("button"));

/*console.log(document.getElementsByClassName("list-item"));

console.log(document.getElementsByClassName("list")[0]);
console.log(document.getElementById("main-heading"));

console.log(document.querySelector("li"));
console.log(document.querySelector("button"));
console.log(document.querySelectorAll("button"));

console.log(document.querySelector(".list"));
console.log(document.querySelector(".list-item"));
console.log(document.querySelectorAll(".list-item"));
console.log(document.querySelector("#main-heading"));
console.log(document.querySelector("p.text-item"));


document.querySelector("#main-heading").style.color="red";
document.querySelector("#main-heading").style.backgroundColor="yellow";*/

//var heading=document.querySelector("#main-heading");
//heading.classList.add("pageheading");
//console.log(heading.getAttribute("id"));





//heading.classList.remove("xyz");
//heading.classList.toggle("xyz");
//console.log(heading.classList)




/*heading.style.color="red";
heading.style.backgroundColor="yellow";
heading.style.fontSize="50px";
heading.style.visibility="hidden";
var button=document.querySelector(".primary-cta");
button.style.visibility="visible";*/

//var listItems=document.querySelectorAll(".list-item");
/*listItems[0].style.color="blue";
listItems[1].style.color="blue";
listItems[2].style.color="blue";*/

/*listItems.forEach(item=>{
    item.style.color="red";
})


var link=document.querySelector("a");
console.log(document.querySelector("a").getAttribute("href"));
link.setAttribute("href","https://www.prepbytes.com");
console.log(link.getAttribute("href"));*/


//console.log(link.innerHTML);
//console.log(link.textContent);

//link.textContent='<em>PrepBytes</em>'

//console.log(link.innerText);


/*var heading=document.querySelector("#main-heading");

heading.addEventListener("mouseover",function(){
    console.log("Mouse Hover Event");
})
//heading.classList.toggle("page-heading");

function mouseEvent(){
    console.log("Mouse Hover Event");
    heading.classList.toggle("page-heading");
}


var button = document.querySelectorAll("button")[0];

button.addEventListener("click", ()=>{
    console.log("Click Event");
    document.querySelectorAll("button")[1].style.visibility="visible";
})


document.addEventListener("keydown", (event)=>{
    console.log(event.key);
})

console.log($(".list-item").text());

document.querySelectorAll(".list-item").forEach((listItem)=>{
    listItem.addEventListener("mouseover", ()=>{
        console.log("List is hovered");
        listItem.style.color="green"
    })
})*/

/*console.log($("#main-heading")); 
console.log($("li")); 
console.log($(".text-item"));

console.log($("h1").text());
console.log($(".secondry-cta").text());*/

//$("h1").text("Jquery is a Javascript Library");

//console.log($("h1").css("background-color","green"));
//$("h1").css("background-color","green");
//$("h1").css("font-size","3rem");
//$("button.secondry-cta").css({"background-color": "red","font-size": "2rem","color":"white"});
//$("button#cta-primary").removeClass("primary-cta");

//$("button").addClass("primary-cta");
//$("h1").html("<em>We are learning Jquery</em>");

//$("a").attr("href","https://www.prepbytes.com");
//$("h1").before("<button>Click Me</button>");
//$("h1").after("<button>Click Me</button>");

//$("h1").append("<button>Click Me</button>");
//$("h1").prepend("<button>Click Me</button>");

$("h1").mouseenter(function(){
//console.log("Mouse has entered");
$("h1").css("background-color","black");
})

$("h1").mouseleave(()=>{
    //console.log("Mouse has left");
$("h1").css("background-color","blue"); 
})

$(document).keypress((event)=>{
    console.log("key is pressed   " + event.key);
    $("h1").text(event.key);


})


$("h1").on("mouseenter", function(){
    //console.log("Mouse has entered");
    $("h1").css("background-color","pink");
    })
    
    $("h1").on("mouseleave", function(){
        //console.log("Mouse has left");
    $("h1").css("background-color","yellow"); 
    })


//$("button").click(function(){
// console.log("Button is clicked");  
//})

$("button").on("click", ()=>{
console.log("Button is clicked");
$("h1").toggleClass("heading1 heading2");
})
































