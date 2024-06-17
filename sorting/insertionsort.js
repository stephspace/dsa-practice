function insertionsort(arr){
    for(let i = 1; i < arr.length; i++){
        let tempVal = arr[i];
        let index = i - 1;

        while(index >= 0){
            if(arr[index] > tempVal){
                arr[index + 1] = arr[index];
                index--;
            } else {
                break;
            }
            arr[index+1] = tempVal;
        }
    }
    return arr;
}


let arr1 = [10,999,5,15,54,30];
let arr2 = [110,99,5,15,54,1];

console.log("Array 1 unsorted:",arr1);
insertionsort(arr1);
console.log("Array 1 sorted  :",arr1);

console.log("Array 2 unsorted:",arr2);
insertionsort(arr2);
console.log("Array 2 sorted  :",arr2);

