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




