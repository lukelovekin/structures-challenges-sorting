const arrOne = [1,3,3,4,'foo',6,7,8]
const arrTwo = [2,'bar',2,2,5,6,7,8,9]

const merge = (arrX, arrY) => {
    let x = 0
    let y = 0
    let newArr = []

    while(arrX[x] || arrY[y]){
        // if element is not a number add index
        if(arrX[x] && isNaN(arrX[x])) x++
        if(arrY[y] && isNaN(arrY[y])) y++
        
        // if element is smaller add to the array
        if(arrX[x] <= arrY[y]){
            newArr.push(arrX[x])
            x++
        }
        if(arrX[x] >= arrY[y]){
            newArr.push(arrY[y])
            y++
        }

        // if one is empty but not the other then push el from the other and add index
        if(!arrX[x] && arrY[y]){ 
            newArr.push(arrY[y])
            y++
        }
        if(!arrY[y] && arrX[x]){
            newArr.push(arrY[x])
            x++
        }
    }
    console.log(newArr)

}

merge(arrOne, arrTwo)