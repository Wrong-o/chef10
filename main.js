function showPopup(item) {
  //Set the message 
  document.getElementById('modalMessage').innerText = 'You clicked ' + item;

  document.getElementById('popupModal').style.display = 'block';
}

var modal = document.getElementById('popupModal');
var closeButton = document.getElementByClassName('close')[0];

closeButton.onclick = function(){
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
