const words=[
"Frontend Developer",
"CSE Student",
"Web Designer",
"Problem Solver"
];

let i=0;
let j=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

let current=words[i];

if(!deleting){

typing.textContent=current.substring(0,j++);

if(j>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=current.substring(0,j--);

if(j<0){

deleting=false;

i=(i+1)%words.length;

}

}

setTimeout(type,deleting?60:120);

}

type();