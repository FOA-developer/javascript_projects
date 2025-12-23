 const color =['red', 'green', 'blue','green', 'red' ]
 function noDuplicates(colors){
  let newColors = [];
    for(let i= 0; i < colors.length; i++){
      for (let j = 0; j < i; j++){
        if(colors[i] === colors[j]){
          colors.splice(j, 1)
          j--
        }
      }
    return colors;
  }
 }
 console.log(noDuplicates(color));

 const no = color.map( arr => arr + 1)
 console.log(no)