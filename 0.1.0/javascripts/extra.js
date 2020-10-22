window.onclick = function(event) {
  init(event);
}

function init (eventData) {
  var currentId = eventData.srcElement.parentElement.hash;

  if (currentId) {
    changeCheckedInput(currentId);
  }
}

function changeCheckedInput (currentId) {
  var idToUse = currentId.replaceAll('#','');
  var cobeneficiaryInput = document.getElementById(idToUse)
  var inputParent = cobeneficiaryInput.parentElement.getElementsByTagName("input")

  cobeneficiaryInput.checked = true;

  for(i=0; i<inputParent.length; i++) {
    if (inputParent[i].id !== idToUse) {
      inputParent[i].checked = false;    
    } 
  } 
}

window.onscroll = function() {
  displayTitle();
}

function displayTitle (){
  var title = document.getElementsByClassName("md-header-nav__title");

  if (title[0].attributes[2].value === "active") {
    var parentElement = document.getElementsByClassName("md-header-nav__ellipsis");
    var currentTitle = parentElement[0].children[1];
    
    currentTitle.classList.add("displayTitle");
  }
}