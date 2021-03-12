function settext(){
   var display_input=[];
for (var counter=1;counter<=8; counter++){



    var text=document.getElementById("input_type_"+counter).value;
    display_input.push(text);
}
console.log(display_input);


var length=display_input.length;
console.log(length);
for (var counter=0; counter<length; counter++){
    display_input.push("<h4>name:"+display_input[counter]+"</h4>");

console.log(display_input);}
document.getElementById("display").innerHTML=display_input;
}  


