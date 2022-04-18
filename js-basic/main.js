var myElement = document.querySelectorAll('h1')
for(var i = 0; i < myElement.length; i++) {
  myElement[i].onclick = function(e) {
    console.log(e.target.textContent)
  }
}
