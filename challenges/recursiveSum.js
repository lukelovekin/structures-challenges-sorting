function superDigit(n, k) {
    if (n < 10){
        return n;
    }else{
        return superDigit(
            n
            .toString()
            .split("")
            .reduce((sum, num) => Number(sum) + Number(num), 0) * k,
            1
            );
    }
}

superDigit(148,3)
