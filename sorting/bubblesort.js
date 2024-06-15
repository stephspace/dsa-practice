function bubblesort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }  
}

function bubblesortoptimized(arr){
    for(let i = 0; i < arr.length; i++){
        let isSwapped = false;
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        //if no comparisons were made we exit out the outer loop
        if(!isSwapped) break;
    }
}

let arr1 = [10,999,5,15,54,30];
let arr2 = [110,99,5,15,54,1];

console.log("Array 1 unsorted:",arr1);
bubblesort(arr1);
console.log("Array 1 sorted  :",arr1);

console.log("Array 2 unsorted:",arr2);
bubblesortoptimized(arr2);
console.log("Array 2 sorted  :",arr2);
