var tall = 0
document.getElementById("Button").addEventListener('click', () => {
  tall = tall + 1
  document.getElementById("Count").innerHTML = tall
})