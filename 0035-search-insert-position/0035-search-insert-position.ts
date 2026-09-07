function searchInsert(nums: number[], target: number): number {
    if(nums.indexOf(target) != -1) {
        return nums.indexOf(target);
    }

    if (nums[0] > target) return 0;
    if (nums[nums.length-1] < target) return nums.length;

    for (let i=0; i<nums.length-1; i++) {
        if(nums[i] < target && nums[i+1] > target){
            return i+1;
        }
        // else if (i == 0) return 0;
        // else return nums.length;
    }
};