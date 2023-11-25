//16 x 16 grid 


let gridLoad = document.body.setAttribute('onload', "defaultGrid(16)");
const grid = document.getElementById('grid-box');

if (location.reload){
    gridLoad = document.body.setAttribute('onload', "changeGridValue()");
}



const gridButton = document.createElement('button');
gridButton.setAttribute('id', 'grid_button');
gridButton.setAttribute('onclick', 'location.reload(true)');
gridButton.innerText = "Grid Size";
document.getElementById('button').appendChild(gridButton);


const gridButtonRgb = document.createElement('button');
gridButtonRgb.setAttribute('id', 'grid_button_rgb');
gridButtonRgb.setAttribute('onclick', 'colorEffect()');
gridButtonRgb.innerText = "Rainbow";
document.getElementById('buttonRGB').appendChild(gridButtonRgb);
const gridButtonBlack = document.createElement('button');
gridButtonBlack.setAttribute('id', 'grid_button_black');
gridButtonBlack.setAttribute('onclick', 'blackEffect()');
gridButtonBlack.innerText = "Black";
document.getElementById('buttonRGB').appendChild(gridButtonBlack);
const gridButtonClear = document.createElement('button');
gridButtonClear.setAttribute('id', 'grid_button_clear');
gridButtonClear.setAttribute('onclick','clearButton()');
gridButtonClear.innerText = "Clear Grid";
document.getElementById('buttonRGB').appendChild(gridButtonClear);



function defaultGrid(n){
    for(i = 0; i < n; i++)
    {
        const gridRow = document.createElement('div');
        gridRow.className = 'row';
        grid.appendChild(gridRow);
        for(j = 0; j < n; j++){
            const gridColumn = document.createElement('div');
            gridColumn.className = 'column';
            gridRow.appendChild(gridColumn);
        } 
    }
    return blackEffect();
}
//grid function that calls the default grid and changes its size... black

function changeGridValue(){
    
    n = window.prompt("Size? (8 to 128)");
        if (n < 8){
            n = 8;
        }
        if (n > 128){
            n = 128;
        }

        for(i = 0; i < n; i++)
    
    return defaultGrid(n) && blackEffect();
    
}

//black color for each tile
function blackEffect(){
        //hover effect - black 
        const colElement = document.getElementsByClassName("column");
            const colArray = Array.from(colElement);
            for (i = 0; i < colArray.length; i++){
                colArray[i].addEventListener('mouseover', function(e){
                    e.target.style.backgroundColor = 'black';
                });
      }         
    }

//random color for each tile
function colorChange(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

//grid function that calls the default grid and changes its size... color
function colorEffect(){
        const colElement = document.getElementsByClassName("column");
            const colArray = Array.from(colElement);
            for (i = 0; i < colArray.length; i++){
                colArray[i].addEventListener('mouseover', function(e){
                    e.target.style.backgroundColor = colorChange();
                });
      }       
    }
//button that "clears" the grid of colors and sets to default color.
function clearButton(){
    const colElement = document.getElementsByClassName("column");
    const colArray = Array.from(colElement);
        for(i = 0; i < colArray.length; i++){
        colArray[i].style.backgroundColor = 'rgb(199, 201, 204)';
        }
}

