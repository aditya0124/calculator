let input= document.getElementById('input-box');
let buttons= document.querySelectorAll('button');

let string='';
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML== '='){
            string=eval(string); //evaluate is javascript function that evaluate value mathematically
            input.value = string;
        }
        else if(e.target.innerHTML== 'AC'){
            string=""; 
            input.value = string;
        }
        else if (e.target.innerHTML== 'DEL'){
            string= string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string+= e.target.innerHTML;
            console.log(e.target);// we add  out buuton to the string
            input.value = string  // iput tag ki value johai wo string hai
        }
    })
} )