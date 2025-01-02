function showPopup(item) {
  //Set the message 
  document.getElementById('modalMessage').innerText = 'You clicked ' + item;
  //Popup blocks everything
  document.getElementById('popupModal').style.display = 'block';
}

// Get the modal and the close button 
var modal = document.getElementById('popupModal');
var closeButton = document.getElementsByClassName('close')[0];
//Close modal with closeButtonj
closeButton.onclick = function(){
  modal.style.display = 'none';
}

//Close if clickes outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
