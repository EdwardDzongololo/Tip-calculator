const firstTip=document.getElementById("tip-1");
const price=document.getElementById("price");
const total=document.getElementById("total")
const NumberOfPeople=document.getElementById("number-of-people");


const personal=document.getElementById("person")
firstTip.addEventListener("click", function(){
    const tip1=(Number(price.value)*5/100)
    total.innerHTML="$"+tip1
const perPerson= tip1/(Number(NumberOfPeople.value))
personal.innerHTML="$"+perPerson
})




// const price=document.getElementById("price").value 
// console.log(price)