

document.addEventListener("DOMContentLoaded", ()=>{
    
    const newtask = document.querySelector("#task");
    const submit = document.querySelector("#submit");

   document.querySelector("#f1").onKeyUp=function(){
       
   }



    document.querySelector("#f1").onsubmit = function(){
        const task = newtask.value;
        
        
       
        const li = document.createElement("li");
        
        li.innerHTML = task;

        
        document.querySelector("#tasks").append(li);
        newtask.value="";
        submit.Disabled= true;
        return false;
    };


    // document.querySelector("#f2").onsubmit = function(){
    //     const task = newtask.value;
        
    //     const li = document.createElement("li");
        
    //     li.innerHTML = task;
    //     li.innerHTML = value;
    //     document.querySelector("#tasks").remove(this.li);
        
    //     return false;
    // };


    // if(newtask.value == null){
    //     submit.display = true;
    // }else{
    //     submit.display = false;
    // }

});
