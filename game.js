var rows = 40;
var cols = 100;
genCount = 0;
liveCount = 0;
var running = false;
var frame = new Array(rows);
var frame2 = new Array(rows);

var setTime;
var ticking = 40;

function gameFrames() {
    for (var i = 0; i < rows; i++) {
        frame[i] = new Array(cols);
        frame2[i] = new Array(cols);
    }
}

function newFrames() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            frame[i][j] = 0;
            frame2[i][j] = 0;
        }
    }
    document.getElementById('gen').innerHTML = genCount;
    document.getElementById('live').innerHTML = liveCount;
}
// empty table frame
function reFrame() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            frame[i][j] = frame2[i][j];
            frame2[i][j] = 0;
        }
    }
    document.getElementById('gen').innerHTML = ++genCount;
    livesCount();
    
}
function livesCount() {
    liveCount = 0;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if(frame[i][j] == 1){
            liveCount++;
        }
      }
    }
    document.getElementById('live').innerHTML = liveCount;
    
  }
  function livesCount23() {
    liveCount = 0;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if(frame[i][j] == 1){
            liveCount+=23;
        }
      }
    }
    document.getElementById('live').innerHTML = liveCount;
    
  }


function startGame() {
    conwayBoard();
    gameFrames();
    newFrames();
    
    
}

//board layout
function conwayBoard() {
    var content = document.getElementById('content');
    var table = document.createElement("table");
    
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            var unit = document.createElement("td");
            unit.setAttribute("id", i + "." + j);
            unit.setAttribute("class", "dead");
            unit.onclick = toClickCell;
            tr.appendChild(unit);
        }
        table.appendChild(tr);
    }
    content.appendChild(table);
    }

    function toClickCell() {
        var rows_and_cols = this.id.split(".");
        var i = rows_and_cols[0];
        var j = rows_and_cols[1];
        
        var classes = this.getAttribute("class");
        if(classes.indexOf("live") > -1) {
            this.setAttribute("class", "dead");
            frame[i][j] = 0;
            document.getElementById('live').innerHTML = --liveCount;
        } else {
            this.setAttribute("class", "live");
            frame[i][j] = 1;
            document.getElementById('live').innerHTML = ++liveCount;
        }
        
        
    }

    function deadOrAlive() {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var unit = document.getElementById(i + "." + j);
                if (frame[i][j] == 0) {
                    unit.setAttribute("class", "dead");
                } else {
                    unit.setAttribute("class", "live");
                }
            }
        }
     
    }

function resetLife(){
    location.reload();
}
$(document).ready(function(){
    $("#start").click(manageStartbtn);
    $("#clear").click(manageClearBtn);
    $("#random").click(manageRandomBtn);
    $("#step").click(nextBtn);
    $("#step23").click(next23GenBtn);
    $("#reset").click(resetLife);
    $("#still").click(stillLife);
    $("#osci1").click(oscillator1);
    $("#osci2").click(oscillator2);
    $("#gun").click(gunGlider);
    $("#randomm").click(manage2RandomBtn);
        
});

function manageRandomBtn() {
    if (running) return;
    manageClearBtn();
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var ifLiving = Math.round(Math.random());
            if (ifLiving == 1) {
                var cell = document.getElementById(i + "." + j);
                cell.setAttribute("class", "live");
                frame[i][j] = 1;
            }
            
        }
    }
    livesCount();
    
}  
function manage2RandomBtn() {
    if (running) return;
    manageClearBtn();
    var still = stillLife();
    var osci1 = oscillator1();
    var osci2 = oscillator2();
    var gun = gunGlider();
    var arr = [still, osci1, osci2, gun];
    
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var guess = arr[Math.floor(Math.random() * arr.length)];
            if(guess){
                guess[frame[i][j]];
            }
            
            
            
        }
    }
    guess;
    
    livesCount();
    
} 

    

/* function manageBlinkerBtn(){
    //if(running) return;
    //manageClearBtn();
    //var row = rows/2;
    //var col = cols/2;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if(frame2[i][j] == 1){
                var unit = document.getElementById(i + "." + j);
                unit.setAttribute("class", "live");
                frame2[i][j] = 1; 
            }       
        }
    }
    frame2[10][11]=1;
    frame2[11][10]=1;
    frame2[11][11]=1;
    frame2[11][12]=1;
    frame2[12][10]=1;
    livesCount();
    return frame2;
    //livesCount(); 
    
} */

function gunGlider(){ 
    if(running) return;
    manageClearBtn();
    frame2[0][4]=1;
    frame2[0][5]=1;
    frame2[1][4]=1;
    frame2[1][5]=1;
    frame2[10][4]=1;
    frame2[10][5]=1;
    frame2[10][6]=1;
    frame2[11][3]=1;
    frame2[11][7]=1;
    frame2[12][2]=1;
    frame2[12][8]=1;
    frame2[13][2]=1;
    frame2[13][8]=1;
    frame2[14][5]=1;
    frame2[15][3]=1;
    frame2[15][7]=1;
    frame2[16][4]=1;
    frame2[16][5]=1;
    frame2[16][6]=1;
    frame2[17][5]=1;
    frame2[20][2]=1;
    frame2[20][3]=1;
    frame2[20][4]=1;
    frame2[21][2]=1;
    frame2[21][3]=1;
    frame2[21][4]=1;
    frame2[22][1]=1;
    frame2[22][5]=1;
    frame2[24][0]=1;
    frame2[24][1]=1;
    frame2[24][5]=1;
    frame2[24][6]=1;
    frame2[34][2]=1;
    frame2[34][3]=1;
    frame2[35][2]=1;
    frame2[35][3]=1;
    genCount=0;
}
function stillLife(){
    if(running) return;
    manageClearBtn();
    frame2[20][11]=1; 
    frame2[21][10]=1;
    frame2[21][12]=1;
    frame2[22][10]=1;
    frame2[22][13]=1;
    frame2[23][11]=1;
    frame2[23][12]=1;
    
    
}
function oscillator1(){
    if(running) return;
    manageClearBtn();
    frame2[23][23]=1;
    frame2[23][24]=1;
    frame2[24][23]=1;
    frame2[24][24]=1;
    frame2[24][26]=1;
    frame2[25][27]=1;
    frame2[26][24]=1;
    frame2[27][25]=1;
    frame2[27][27]=1;
    frame2[27][28]=1;
    frame2[28][27]=1;
    frame2[28][28]=1;
    
}
function oscillator2(){
    if(running) return;
    manageClearBtn();
    frame2[21][23]=1;
    frame2[22][21]=1;
    frame2[22][25]=1;
    frame2[22][26]=1;
    frame2[22][27]=1;
    frame2[22][28]=1;
    frame2[23][21]=1;
    frame2[23][25]=1;
    frame2[24][21]=1;
    frame2[25][24]=1;
    frame2[26][22]=1;
    frame2[26][23]=1;
    
    
    
}
function manageClearBtn() {
    running = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";    
    clearTimeout(setTime);
    
    var unitsContent = document.getElementsByClassName("live");
    var units = new Array();
    for (var i = 0; i < unitsContent.length; i++) {
        units.push(unitsContent[i]);
    }
    
    for (var i = 0; i < units.length; i++) {
        units[i].setAttribute("class", "dead");
    }
    document.getElementById('gen').innerHTML = (genCount=0);
    document.getElementById('live').innerHTML = (liveCount=0);
    newFrames;
}

// start, pause,continue the game
function manageStartbtn() {
    if (running) {
        running = false;
        this.innerHTML = "Continue";
        clearTimeout(setTime);
    } else {
        running = true;
        this.innerHTML = "Stop";
        run();
    }
}


function run() {
    newGeneration();
    
    if (running) {
        setTime = setTimeout(run, ticking);
    }
    document.getElementById('gen').innerHTML = ++genCount;
}

function newGeneration() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            gameRules(i, j);
        }
    }
    
    
    reFrame();
    deadOrAlive();
}
function nextBtn(){
    newGeneration(); 
}
function next23GenBtn(){
    for(var i =1; i< 23; i++){
        newGeneration();
    }
    return newGeneration();
}


function gameRules(i, j) {
    var numNeighbors = countAdjacentCells(i, j);
    if (frame[i][j] == 1) {
        if (numNeighbors < 2) {
            frame2[i][j] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            frame2[i][j] = 1;
        } else if (numNeighbors > 3) {
            frame2[i][j] = 0;
        }
    } else if (frame[i][j] == 0) {
            if (numNeighbors == 3) {
                frame2[i][j] = 1;
            }
        }
    }
    //document.getElementById('gen').innerHTML = ++genCount;
    
    
function countAdjacentCells(i, j) {
    var count = 0;
    if (i-1 >= 0) {
        if (frame[i-1][j] == 1) count++;
    }
    if (i-1 >= 0 && j-1 >= 0) {
        if (frame[i-1][j-1] == 1) count++;
    }
    if (i-1 >= 0 && j+1 < cols) {
        if (frame[i-1][j+1] == 1) count++;
    }
    if (j-1 >= 0) {
        if (frame[i][j-1] == 1) count++;
    }
    if (j+1 < cols) {
        if (frame[i][j+1] == 1) count++;
    }
    if (i+1 < rows) {
        if (frame[i+1][j] == 1) count++;
    }
    if (i+1 < rows && j-1 >= 0) {
        if (frame[i+1][j-1] == 1) count++;
    }
    if (i+1 < rows && j+1 < cols) {
        if (frame[i+1][j+1] == 1) count++;
    }
    return count;
}

// Play Conway's Game of life
window.onload = startGame;