function substrCount(n, s) {
    let result = n


    for(let i = 0; i < n; i++){
        let repeat = 0;
        while(i + 1 < n && s.charAt(i) == s.charAt(i+1)){
            repeat++
            i++
        }
        result += (repeat * (repeat + 1))/2

        let pointer =  1;
        while(i - pointer >= 0 && i + pointer < n && s.charAt(i + pointer) == s.charAt(i - 1) && s.charAt(i - pointer) == s.charAt(i + 1)){
            result++
            pointer++
        }
    }

    return result
}

substrCount('7','abcbaba')