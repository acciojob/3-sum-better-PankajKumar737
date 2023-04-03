function threeSum(arr, target) {
// write your code here
	var sum =0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] == target){
			sum = arr[i-1]+arr[i]+arr[i-2];
		}
		return sum;
	}
  
}

module.exports = threeSum;
