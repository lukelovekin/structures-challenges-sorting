//  look for non +
// check if horizontal or vertical canPlaceV() canPlaceH() return a boolean
// canPlaceH() canPLaceV()
// count how many letters in that word
// choose a matching length word from word list to insert into that space,
// look for the next -, if its next to a length, find a word that has a letter in the same spot
// choose another word for the original spot
// 
// 
function crosswordPuzzle(c, words) {
  let row = 9
  let col = 9
  let wordLength = 0
  let isVert
  // let join = false
  // let wordLengths = []
  let toCheck = [...words]
  let checked = []
  let checkInd = 0
  let startLetter


  //  loop through whole grid
  for(let x = 0; x < col; x++ ){
      for(let y = 0; y < row; y++){

        // check row until found a -
        if (c[x][y] == "-") {
          // let firstCords = [x,y];

            const vertCount = () => {
              let newX = x
              while(c[newX] && c[newX][y] == '-'){
                newX++
                wordLength++
              }
              let matched
              if(startLetter){
                matched = toCheck.filter(word => {
                  word[0] === startLetter
                })
              }else{
                matched = toCheck.filter(word => word.length === wordLength)
              }
              let newerX = x
              matched[checkInd].split('').forEach(letter => {
                c[newerX][y] = letter
                newerX++
              })
              toCheck.splice(toCheck.indexOf(matched[checkInd]), 1)
              checked.push(matched[checkInd]);
              console.log(toCheck)
            }
            
            const horiCount = () => {
              let newY = y
              while (c[x][newY] == '-') {
                newY++;
                wordLength++;
              }
              let matched

              console.log(startLetter)

              if(startLetter){
                matched = toCheck.filter((word) => {
                  word[0] === startLetter;
                });
              }else{
                matched = toCheck.filter(word => word.length === wordLength)
              }
              console.log(matched)
              let newerY
              startLetter && matched ? newerY = y - 1 : newerY = y
              matched[checkInd].split('').forEach(letter => {
                c[x][newerY] = letter
                newerY++
              })
              toCheck.splice(toCheck.indexOf(matched[checkInd], 1));
            }

          //  is vertical or horizontal word
          if (c[x][y + 1] == "-") {
            isVert = false
            if(c[x][y - 1] !== "+"){
              startLetter = c[x][y - 1];
              wordLength++
            }
          }
          if (c[x + 1][y] == "-") {
            isVert = true
            if (c[x - 1] && c[x - 1][y] !== "+") {
              firstLetter = c[x - 1][y];
              wordLength++
            }
          }
          // if theres a - both then its a join
          if (c[x + 1][y] == "-" && c[x][y + 1] == "-") console.log("JOIN")
          
          isVert ? vertCount() : horiCount();
          // wordLengths.push(wordLength)
        }
        wordLength = 0;
      }
  }

  console.log(c)
  // 6, 5, 7, 6


}

// const crossword = [
//   ["+","-","+","+","+","+","+","+","+","+"],
//   ["+","-","+","+","+","+","+","+","+","+"],
//   ["+","-","+","+","+","+","+","+","+","+"],
//   ["+","-","-","-","-","-","+","+","+","+"],
//   ["+","-","+","+","+","-","+","+","+","+"],
//   ["+","-","+","+","+","-","+","+","+","+"],
//   ["+","+","+","+","+","-","+","+","+","+"],
//   ["+","+","-","-","-","-","-","-","+","+"],
//   ["+","+","+","+","+","-","+","+","+","+"],
//   ["+","+","+","+","+","-","+","+","+","+"]
// ]

const crossword = [
  ["+","-","+","+","+","+","+","+","+","+"],
  ["+","-","+","+","+","+","+","+","+","+"],
  ["+","-","+","+","+","+","+","+","+","+"],
  ["+","-","-","-","-","-","+","+","+","+"],
  ["+","-","+","+","+","+","+","+","+","+"],
  ["+","-","+","+","+","+","+","+","+","+"],
  ["+","+","+","+","+","+","+","+","+","+"],
  ["+","+","+","+","+","+","+","+","+","+"],
  ["+","+","+","+","+","+","+","+","+","+"],
  ["+","+","+","+","+","+","+","+","+","+"]
]

const words = ["LONDON","DELHI",/*"ICELAND","ANKARA"*/]

crosswordPuzzle(crossword, words)