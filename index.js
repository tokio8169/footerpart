
document.querySelector("#btn").addEventListener("click" , ()=>{

    var email=document.getElementById("email").value;


    if(email==""){
        alert("Please Enter your email!");
        return false;
    }else{
        return true;
    }

    
})



document.querySelector("#codekori").innerHTML="Codekori";
document.querySelector("#codekori").style.color="yellow";

