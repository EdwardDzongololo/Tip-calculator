// cons=document.getElementById("tip-1");
const price=document.getElementById("price");
const total=document.getElementById("total")
const NumberOfPeople=document.getElementById("number-of-people");
const btn=document.querySelectorAll(".tip")
const personal=document.getElementById("person")
const warning=document.querySelector(".warning")
const customBtn=document.querySelector(".clear-input-button")
const custom=document.getElementById("custom")


function calculateTip(){
    btn.forEach(function(btn){
    btn.addEventListener("click", function(){
       
        
        let tipPercentage=(btn.getAttribute('data-value'))
        let tip=(Number(price.value)*tipPercentage/100)
            total.innerHTML="$"+tip
           people=(Number(NumberOfPeople.value))
           if (people===0||""){
            warning.style.display="flex";
        personal.innerHTML= "$"+"---"
           }else
           {const perPerson= tip/people
           personal.innerHTML="$"+perPerson}
        })
      
    })
    }
    calculateTip()
    const resetBtn=document.querySelector(".reset") 
    resetBtn.addEventListener("click",function(){
        document.getElementById("form").reset()
    })   
   
       

// let inputValue=(Number(custom.value))
// //  (inputValue>0||!""){
//     function customEl(){
//         customBtn.addEventListener("click",function(){
//             let tip=(Number(price.value)*inputValue/100)
//             total.innerHTML="$"+tip
//            people=(Number(NumberOfPeople.value))
//            {const perPerson= tip/people
//            personal.innerHTML="$"+perPerson}
//         })
    
//     }

//      function customEl()
   
