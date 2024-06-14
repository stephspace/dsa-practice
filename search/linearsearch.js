function linear_search(arr,target){
	for(let i = 0; i < arr.length; i++){
		if(target == arr[i]) return i;
	}
	return 'Value not found';
}

//unsorted array
console.log(linear_search([20,3,9,4,10],10));
console.log(linear_search([20,3,9,4,10],13));
//sorted array
console.log(linear_search([1,8,12,15,20],10));
console.log(linear_search([1,8,12,15,20],12));

