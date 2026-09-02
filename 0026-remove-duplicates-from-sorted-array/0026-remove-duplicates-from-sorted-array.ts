// function removeDuplicates(nums: number[]): number {
//     for(let i: number=0; i<nums.length; i++){
//         if (nums.indexOf(nums[i]) !== i) {
//             nums.splice(i,1);
//             i--;
//         }
//     }
//     return nums.length;
// };

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}