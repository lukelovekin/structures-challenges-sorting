//  look for non +
// check if horizontal or vertical canPlaceV() canPlaceH() return a boolean
// canPlaceH() canPLaceV()
// count how many letters in that word
// choose a matching length word from word list to insert into that space,
// look for the next -, if its next to a length, find a word that has a letter in the same spot
// choose another word for the original spot
// 
// 
function crosswordPuzzle(crossword, words) {
  let c = crossword.map((row) => row.split(""));
  let toCheck = [...words.split(';')]

  let wordLength = 0
  let isVert
  let startLetter

  // not sure if i need a checked
  let checked = []

  // used if more than one matched word is found so reset can be done
  let checkInd = 0
  let savedC
  let oldMatched
  let oldX
  let oldY
  let checkpoint

  //  loop through whole grid
  for(let x = 0; x < c.length - 1; x++ ){
      for(let y = 0; y < c[0].length - 1; y++){

          // is word horizontal or vertical
          const isHoriOrVertWord = () => {
            if (c[x][y + 1] == "-") {
              isVert = false;
              if (c[x][y - 1] !== "+") {
                startLetter = c[x][y - 1];
                wordLength++;
              }
            }else if(c[x + 1][y] == "-") {
              isVert = true;
              if (c[x - 1] && c[x - 1][y] !== "+") {
                startLetter = c[x - 1][y];
                wordLength++;
              }
            }
          };

          const vertCountAndFit = () => {
            let newX = x
            while(c[newX] && c[newX][y] !== '+'){
              newX++;
              wordLength++
            }

            // matched will be a list of words that match the spaces length and might have a start letter
            let matched
            if(startLetter){
              matched = toCheck.filter(word =>word[0] === startLetter)
            }else{
              matched = toCheck.filter(word => word.length === wordLength)
            }

            if (!matched) {
              checkInd++;
              c = savedC;
              matched = oldMatched;
              x = oldX;
              y = oldY - 1;
              checkpoint = `${newerX}_${y}`;
            }
            if(matched.length > 1){
              savedC = c;
              oldMatched = matched
              oldX = x
              oldY = y
            }

            let newerX = x
            startLetter && matched.length > 0 ? (newerX = x - 1) : (newerX = x);

            for (let letter of matched[checkInd].split("")){
              if(`${newerX}_${y}` === checkpoint) checkInd = 0
              if (c[newerX][y] !== "-" && c[newerX][y] !== letter) {
                  checkInd++;
                  c = savedC;
                  matched = oldMatched;
                  x = oldX;
                  y = oldY;
                  checkpoint = `${newerX}_${y}`
              } else {
                c[newerX][y] = letter
                newerX++
              }
              // checked.push(matched[checkInd]);
              // toCheck.splice(toCheck.indexOf(matched[checkInd]), 1);
              // console.log(matched)
            }
          }

          const horiCountAndFit = () => {
            let newY = y
            while (c[x][newY] && c[x][newY] !== '+') {
              newY++;
              wordLength++;
            }
            let matched
            if(startLetter){
              matched = toCheck.filter(word => word[0] === startLetter)
            }else{
              matched = toCheck.filter(word => word.length === wordLength)
            }

            if(!matched){
              checkInd++;
              c = savedC;
              matched = oldMatched;
              x = oldX;
              y = oldY;
              checkpoint = `${x}_${newerY}`;
            }else if(matched.length > 1){
              checkInd++;
              c = savedC;
            }

            let newerY
            startLetter && matched.length > 0 ? newerY = y - 1 : newerY = y
            for (let letter of matched[checkInd].split("")){
                // if grid spot is not a - then check letter again letter if there not equal reset values and checkInd + 1
                if(`${x}_${newerY}` === checkpoint) checkInd = 0
                if (c[x][newerY] !== "-" && c[x][newerY] !== letter) {
                  checkInd++;
                  c = savedC;
                  matched = oldMatched;
                  x = oldX;
                  y = oldY;
                  checkpoint = `${x}_${newerY}`
                  break
                } else {
                  c[x][newerY] = letter;
                  newerY++;
                }
            };
            // checked.push(matched[checkInd]);
            // toCheck.splice(toCheck.indexOf(matched[checkInd]),1)
          }

        // check row until found a -
        if (c[x][y] == "-") {
          isHoriOrVertWord()
          
          isVert ? vertCountAndFit() : horiCountAndFit();
          // wordLengths.push(wordLength)
        }
        startLetter = ''
        wordLength = 0;
    }
  }
  return c.map(row=>row.join(''))
}

const crossword = [
  '+-++++++++',
  '+-++-+++++',
  '+-------++',
  '+-++-+++++',
  '+-++-+++++',
  '+-++-+++++',
  '++++-+++++',
  '++++-+++++',
  '++++++++++',
  '----------'
];

const words = "CALIFORNIA;NIGERIA;CANADA;TELAVIV";

crosswordPuzzle(crossword, words)