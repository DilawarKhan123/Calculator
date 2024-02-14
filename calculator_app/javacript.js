let input=document.getElementById('inputfield');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button => {
    
button.addEventListener('click',(e) =>{
    

    if(e.target.innerHTML=='='){
        string=eval(string);
        input.value=string;

    }
    else if(e.target.innerHTML=='AC'){
        string="";
        input.value=string;
    }
    else if(e.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1);
        input.value=string;

    } else if (e.target.innerHTML == "sin") {
        string += 'Math.sin(';
        input.value = string;
    } else if (e.target.innerHTML == "cos") {
        string += 'Math.cos(';
        input.value = string;
    } else if (e.target.innerHTML == "tan") {
        string += 'Math.tan(';
        input.value = string;
    }else if (e.target.innerHTML == "Log") {
        string="0.3010"
        input.value = string;
    }else if (e.target.innerHTML == "x2") {
        string="0.3010"
        input.value = string;
    }   
    else{
        string+=e.target.innerHTML;
        input.value=string;
    }

    

})



});