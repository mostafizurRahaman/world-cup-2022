/*
**** funciton for select 5 fovourite player from the players list
 */
// slected payerscontainer use outside of the function for use globaly 
const selectedPlayersContainer = document.getElementById('selected-player');
function fovuritePlayer(player){
   const playerName = player.parentNode.children[0].innerText;     
   const li = document.createElement('li'); 
   li.innerText = playerName; 
   
   if(selectedPlayersContainer.children.length < 5){
      selectedPlayersContainer.appendChild(li); 
   }else{
      alert('You already select 5 players.'); 
      return; 
   }

   player.setAttribute("disabled",true);
   player.classList.add('disabled-btn');
   setElementValue('player-counter',selectedPlayersContainer.children.length);
}

/*
**** get Input Field value and convert the value string to parseFloat  
*/
function getInputValue(inputId){
   const inputField = document.getElementById(inputId); 
   const inputValueString = inputField.value; 
   const inputValue = parseFloat(inputValueString); 
   inputField.value = ""; 
   return inputValue; 
}

/* 
**** get Element Value Function and convert the value string to parseFloat
*/
function getElementValue(inputId){
   const element = document.getElementById(inputId); 
   const elementValueString= element.innerText; 
   const elementValue = parseFloat(elementValueString); 
   return  elementValue; 
}
/*
**** set Element Value Funciton with element Id and newValue;  
*/
function setElementValue(elementId , newValue){
   const element = document.getElementById(elementId); 
   element.innerText = newValue; 
}

/*
**** calculate player expenses 
**** Validate perPlayer salary
**** set Value to player expenses
*/
document.getElementById('calculate-btn').addEventListener('click', function(){
   const perPlayerSalary = getInputValue('perPlayer'); 
   if(isNaN(perPlayerSalary)){
      alert('Invalid!!!! Please Enter a valid number: '); 
      return; 
   }else if(perPlayerSalary <0){
      alert("Invalid!!!! Please Enter a Positive Number: ")
   }else{
     const playerExpenses = perPlayerSalary * selectedPlayersContainer.children.length; 
     setElementValue('palyerExpenses', playerExpenses); 
   }
}); 

/**
 **** Calculate total expenses 
 **** Validate managerFee and Coach Fee
 **** set Total expenses Value
 */
document.getElementById('calculate-total').addEventListener('click', function(){
    const managerFee = getInputValue('manager-fee');     
    const coachFee = getInputValue('coach-fee');  
    const playerExpensesString = getElementValue('palyerExpenses'); 
    if(isNaN(managerFee) ||isNaN(coachFee)){
         alert('Invalid!!! Please Enter a valid number'); 
         return; 
    }else if(managerFee <0 || coachFee <0){
         alert("Invalid!!! Please Enter a Positive Number: "); 
         return; 
     }

    const playerExpenses = parseFloat(playerExpensesString);     
    const totalExpenses = playerExpenses + coachFee + managerFee; 

    setElementValue("totalExpenses", totalExpenses); 
}); 


