const array = [45, 101, -10, 555422, 3324, 543, 12, 123, 543, 33, 33, 123]


let arr =[3,1,2,4,6,5]

for(let i=0;  i< arr.length; i++){
    
    for(let j = 0; j< arr.length-i-1; j++ ){
        
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
    
}


console.log(arr)


console.log(bubbleSort(array));
console.log(array)
