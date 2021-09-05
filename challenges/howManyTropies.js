const arr = [1,1,1,3,3,4,5,6,8,3,2,1]

const howManyTrophies = (arr, places) => {
    let total = 0
    let differences = 0
    
    arr.sort()

    // count numbers at the beggining of the array, when the number changes add to differences
    for(let x = 0; differences < places; x++){
        if(arr[x + 1] !== arr[x]) differences++
        total++
    }

    console.log(total)
}

howManyTrophies(arr,4)