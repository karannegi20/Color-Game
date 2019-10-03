var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor(); 

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors= generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent="New colors"

    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i]
    }

    h1.style.backgroundColor = "steelblue";
});

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.backgroundColor = colors[i];   
            squares[i].style.display = "block";
    }
        
});

var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#color");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor == pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var len = colors.length;
    var random = Math.floor(Math.random() * len);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}