const array = [45, 101, -10, 555422, 3324, 543, 12, 123, 543, 33, 33, 123]


function bubbleSort(array){
 let arr = array.slice(); 

for(let i =0 ; i < arr.length-1 ; i ++){
  let isSwap = false;
  for(j = 0 ; j < arr.length - 1 - i; j++){
    if(arr[j] > arr[j+1]){
      [arr[j] , arr[j+1]]  = [arr[j+1] , arr[j]]
        isSwap = true
    }
  }
   if(isSwap == false){
     break;
   } ;
  
}
return arr;
}


console.log(bubbleSort(array));
console.log(array)
