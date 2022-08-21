function fovuritePlayer(player){
   const playerName = player.parentNode.children[0].innerText; 
   const selectedPlayersContainer = document.getElementById('selected-player'); 
   const li = document.createElement('li'); 
   li.innerText = playerName; 
   
   if(selectedPlayersContainer.children.length < 5){
      selectedPlayersContainer.appendChild(li); 
   }else{
      alert('You already select 5 players.'); 
      return; 
   }

   player.setAttribute("disabled",true)
}