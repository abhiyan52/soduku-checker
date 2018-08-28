var exports = module.exports = {};
   
   
   
   
   
   checkDuplicate = (elements) => {
      // console.log("IN CHECK DUPLICATE \n ");
        var object = {};
        elements.filter(function(value){return value !== '.'}).forEach(function(item){
            if(!object[item])
               object[item]=0;

            object[parseInt(item)]+=1
        });
 
        for(value in object)
        {
            if(object[value] >=2)
            { 
            
                
                  console.log("SAMAN HANYO");
                  return false;
                }
            }
        return true;
    }
    
    exports.checkRow = (board) => {
       // console.log("IN CHECK ROW \n ");
         for(let row = 0; row < 9 ; row++)
         {
           // console.log(board[row]);
            if(!checkDuplicate(board[row]))
            return false; 
         }
         return true;
         }

        exports.checkColumn = (board) => {
         //   console.log("IN CHECK COLUMN \n ");
                for(let row=0 ; row < 9 ;row++)
                {
                    let colArray = [];
                for(let col=0 ;col<9 ;col++ )
                {
                    colArray.push(board[col][row]);
                }
                //console.log(colArray);
                 if(!checkDuplicate(colArray))
                   return false;
              }
           return true;
            }

        exports.checkSquare = (board) => {
            //console.log("IN CHECK SQUARE \n ");
            var startPoints = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
            var flag = true;

            startPoints.forEach(function(point){
                let cellArray = [];
                for(let row = 0 ; row<3 ; row++)
                {
                    for(let col= 0 ; col<3 ; col++)
                    {
                        cellArray.push(board[row + point[0]][col + point[1]]);
                    }
                }
              //  console.log(cellArray);
                if(!checkDuplicate(cellArray))
                return false;
            });
          return true;
        }
            
 


