// Initializing the array and printing it to console // Can be done in two different ways
/* var arr =[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
        ],arrText='';

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arrText+=arr[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }
*/

// checking output for a sample grid
/* var board = [
            [1,1,1,0], 
            [2,2,0,2], 
            [3,0,3,3], 
            [4,4,0,4]
        ];
*/ 

// Declare an empty 4x4 array
var board =[
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
            ];
            var board =[
                [4,4,8,2],
                [8,16,64,16],
                [4,8,16,8],
                [2,4,2,2]
                ];
//tile is the current state of game board
tile = addNumbers(board)

//transpose for converting columns to rows

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function printArr(board){

for(var i= 0 ; i < 4 ;i++){
    
        console.log(""+board[i][0]+" "+board[i][1]+" "+board[i][2]+" "+board[i][3]+" ");   
                        }
}
        // printArr(board); //checking output for a given grid


// Randomly select a cell with value '0' 

function random(vacancy){

    var vacant = vacancy[Math.floor(Math.random()*vacancy.length)];
    return vacant;

}

// Find empty cells and randomly assign 2's and 4's

function addNumbers(){

        let options= [];
        for (i=0; i<4; i++){
            for(j=0; j<4; j++){
                if (board[i][j]==0){
                    options.push( {
                                    x:i,
                                    y:j
                                  });
                }
            }
        }
        
        // printArr(board);
        // console.log(options);
        
        if (options.length==0){
            // add to check if no adjacent cells are same.. and then exit
            console.log("GAME OVER, BOSS!");
            process.exit();
        }



        if (options.length>=16){
            let spot1= random(options);
            let spot2= random(options);
            //  console.log(spot1); //checking
             let r= Math.random(1);
        // console.log(r);
             board[spot1.x][spot1.y]= r>0.9 ? 4 :2;
             board[spot2.x][spot2.y]= r>0.9 ? 4 :2;
             //printArr(board);
         }
        
        else if (options.length>0 && options.length!=16){
           let spot = random(options);
            console.log(spot);
            let r= Math.random(1);
            board[spot.x][spot.y]= r>0.9 ? 4 :2;
            //printArr(board);
        }
        return board;
        }
    printArr(tile);


// Slide tiles in a row

function slide(row){
    let arr = row.filter(val=>val);
    let missing = 4- arr.length;
    let zeroes= Array(missing).fill(0);
    arr = arr.concat(zeroes);
    return arr;
}
        // let a= slide([0,2,0,2]);
        // console.log(a);

// Add same elements of a row in an array

function combine(row){

    for( i=3; i>=1; i--){
        let a = row[i];
        let b = row[i-1];
        if(a==b){
            row[i]=a+b;
            row[i-1]=0;
        }
    }
return row;
}

// Operate = slides + combines+ slides

function operate(row){

        row = slide(row);
        row = combine(row);
        row = slide(row);
        return row;

}

//console.log(operate(ss));

// One move per key press until game ends

function keyPressed(){

    const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
   
 
let z = key.name;
if(z=="left"){
    let row1= operate(tile[0]);
    let row2= operate(tile[1]);
    let row3= operate(tile[2]);
    let row4= operate(tile[3]);
    // console.log(row1);
    // updating the game board 'tile' with row1, row2, row3, row4
    tile[0]=row1;
    tile[1]=row2;
    tile[2]=row3;
    tile[3]=row4;
    addNumbers(tile);
    printArr(tile);  
}

else if(z=="right"){
    let row1= operate(tile[0].reverse());
    let row2= operate(tile[1].reverse());
    let row3= operate(tile[2].reverse());
    let row4= operate(tile[3].reverse());
    // console.log(row1);
    tile[0]=row1.reverse();
    tile[1]=row2.reverse();
    tile[2]=row3.reverse();
    tile[3]=row4.reverse();
    addNumbers(tile);
    printArr(tile);  
}

else if(z=="up"){
    //transpose row to columm. So, 'up' action = 'left' action
    rtc= transpose(tile);
    let row1= operate(rtc[0]);
    let row2= operate(rtc[1]);
    let row3= operate(rtc[2]);
    let row4= operate(rtc[3]);
    // console.log(row1);
    rtc[0]=row1;
    rtc[1]=row2;
    rtc[2]=row3;
    rtc[3]=row4;
    ctr = transpose(rtc);
    tile[0] = ctr[0];
    tile[1] = ctr[1];
    tile[2] = ctr[2];
    tile[3] = ctr[3];
    addNumbers(tile);
    printArr(tile);  
}

else if(z=="down"){
    rtc= transpose(tile);
    let row1= operate(rtc[0].reverse());
    let row2= operate(rtc[1].reverse());
    let row3= operate(rtc[2].reverse());
    let row4= operate(rtc[3].reverse());
    // console.log(row1);
    rtc[0]=row1.reverse();
    rtc[1]=row2.reverse();
    rtc[2]=row3.reverse();
    rtc[3]=row4.reverse();
    ctr = transpose(rtc);
    tile[0] = ctr[0];
    tile[1] = ctr[1];
    tile[2] = ctr[2];
    tile[3] = ctr[3];
    addNumbers(tile);
    printArr(tile);  
}


}

});
}
keyPressed();