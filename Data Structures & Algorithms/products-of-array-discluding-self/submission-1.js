class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * [1, 2, 4, 6]
     * lt = 1 rt = 24
     * result [48, 24, 12, 8]
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1)
        let lt = 1
        let rt = 1

        for(let i = 0; i < nums.length; i++){
            result[i] = lt
            lt = lt * nums[i]
        }

        for(let i = nums.length - 1; i >= 0; i--){
            result[i] = rt * result[i];
            rt = rt * nums[i]
        }

        return result
    }
}
