const  name = "kunal";
var surname = "gaurav";


console.log(a);
var a = 5;

var a = [1,2 ,3,4,5];

var b = a;

b.pop();


var kunal = {
    color: "fair",
    height : "6ft",
    address : "bihar",
    college : "gne",
    
    //this is called method
    koifunction : function(){

    }

}

//variable is function scoped 

function abcd(){
    for(let i =0; i<12; i++){
        console.log(i);

        var a = kunal;

    
    }
    // console.log(i);
}

abcd()


function def(){
     
    for(let a = 1; a<7; a++){
        console.log(a);
    }

}

def();

//how to copy reference values?

var p = [1,2,3,4,5];

var w = [...p];

w.pop();


var obj = {name:"kunal"};

var copyobj = {...obj};


if(0){
    console.log("hey");
}else{
    console.log("hello")
}


//forEach loop 

var l = [2,3,4,5,66,6,77,88,8,91,95,9];

l.forEach(function(val){

    console.log(val+2);

})
//forEach kabhi bhi by default jo main array hota hai usme change nhi krta hai wo array ki temporary copy pr change kr ke deta hai 
console.log(l);  //ye changed array nhi print krega ye jo initial array hai wahi print krega 

//forIn loop

// ye forIn loop objects pr loop krne k liye hota hai 

var obj = {
    name: "kunal",
    age: "25",
    city: "biharsharif"
}

for(var key in obj){
    console.log(key ,obj[key]);
}


//function callback

setTimeout(() => {
    console.log("2 second baad chal rha hai ");
}, 2000);

 setTimeout(function k(){
console.log("bhyi ye 3 sec baad chal rha hai");
}, 3000)


//First class function

function xyz(m){
     m(); //yeha pe humne calll isliye kiya hai kyunki humne argument me function aa rha hai 

}

xyz(function(){console.log("hey")}); // here hum function ko as a value pass kr rhe hai 


var arr = [22,44,55,66];

arr[-1] = 77;  //isko krte hi tum ddekh skte ho console me jake ki ye apne asli roop me aa jayega 

//i will continue this later



//Example 1 for constructor function
function abcd(){
    this.name = "kunal";
}

var person1 = new abcd();





//Example 2 for constructor function

console.log(person1);

function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
        return (this.firstname + ' ' + this.lastname) ;
    }

}


var person2 = new person("rakesh", "yeadav");
var female = new person("priti", "chahal")

console.log(person2.firstname);
console.log(female.fullname());


//IIFE

var chirkut = (function(){

    var privatevar = 9;

})();

console.log("kunal");
console.log(chirkut);//cannot be accessible 
console.log("gaurav");


//use of MAP

var arr = [1,2,3,4,5,6];

var newarr = arr.map(function(e){
    return e*2;
})

console.log(newarr)


//use of FILTER

var num = [1,2,3,4,5,6];

var newnumber = num.filter(function(val){
    return val>5;
})

console.log(newnumber)
