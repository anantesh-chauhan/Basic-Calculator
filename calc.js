let String="";

let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
   button.addEventListener('click' ,(e)=>{
    if(e.target.innerHTML== '='){
        try{
            String=eval(String);
            if(String==undefined){
                document.querySelector('input').value="Invalid Input";
                String="";  
            }
            else
            document.querySelector('input').value=String;
        }catch{
            document.querySelector('input').value="Invalid Input";
            String="";
        }
    }
    else if(e.target.innerHTML=="C"){
        String="";
        document.querySelector('input').value=String;
    }
    else if(e.target.innerHTML=="x^2"){
        String=eval(String*String);
        document.querySelector('input').value=String;
    }
    else{
        String = String + e.target.innerHTML ;
        document.querySelector('input').value=String;
    }
   })
})
