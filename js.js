let counter=0;

function addExpenseToTotal(){
    const inputVal = document.querySelector("#inputAmount")
    const val = inputVal.value;
    const expense = parseInt(val,10);
    counter+=expense;
    console.log(counter);
    const ele = document.querySelector("#totalamount");
    ele.innerHTML=counter;

}
const elem = document.getElementById("btnAddExpense");
 elem.addEventListener("click",addExpenseToTotal,false);
 

