function validAnagram(str1, str2){
  if(str1.length !== str2.length) return false

  let lookup = {}

  for(let i of str1){
    lookup[i] ? lookup[i] += 1 : lookup[i] = 1
  }

  for(let i of str2){
    if(!lookup[i]){
      return false
    }else{
      lookup[i] -= 1
    }
  }
  return true
}

validAnagram('anagram', 'margaan')
