function sumOfSquares(nums: number[]): number {
    let result: number = 0;
    let numsLength = nums.length;
    for(let i=0; i < numsLength; i++) {
        if(numsLength % (i+1) === 0) {
            result += nums[i] * nums[i];
        }
    }
    return result;
};