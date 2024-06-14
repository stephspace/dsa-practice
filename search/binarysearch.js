function binary_search(arr,target){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);

    while(start <= end){
        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] < target){
            start = mid + 1;
        } else if(target < arr[mid])
            end = mid - 1;

        mid = Math.floor((start+end)/2);

    }
    return 'Value not found';
}
console.log(binary_search([10,17,25,35,70],70));
console.log(binary_search([1,2,3,4,5],3));
console.log(binary_search([10,17,25,35,70],2));
console.log(binary_search([10,17,25,35,70],17));

