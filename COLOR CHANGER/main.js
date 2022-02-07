const colors = ["green", "red", "#f8f3f4", "rgba(133.122.200)"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    //get random number between 0-3
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = color[randomNum]
})
function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}