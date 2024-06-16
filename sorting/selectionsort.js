function selectionsort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let minValIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minValIndex])
                minValIndex = j;
        }
        let temp = arr[i];
        arr[i]   = arr[minValIndex];
        arr[minValIndex]   = temp;   
    }
}

let arr1 = [10,999,5,15,54,30];
let arr2 = [110,99,5,15,54,1];

console.log("Array 1 unsorted:",arr1);
selectionsort(arr1);
console.log("Array 1 sorted  :",arr1);

console.log("Array 2 unsorted:",arr2);
selectionsort(arr2);
console.log("Array 2 sorted  :",arr2);

