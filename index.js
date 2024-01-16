// Write your code here!
const main = document.getElementById("main")
main.remove()
const newHeader = document.createElement('H1')
newHeader.id = "victory" 
document.body.appendChild(newHeader)
newHeader.innerHTML = "Eugene is the champion"