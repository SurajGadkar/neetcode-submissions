class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums);
        console.log( "uni", unique.size, "nums", nums.length)
        return unique.size !== nums.length ? true : false
    }
}
