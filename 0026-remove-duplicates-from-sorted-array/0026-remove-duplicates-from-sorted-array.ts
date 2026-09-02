function removeDuplicates(nums: number[]): number {
    for(let i: number=0; i<nums.length; i++){
        let duplicateIndex: number = nums.indexOf(nums[i]);
        if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};