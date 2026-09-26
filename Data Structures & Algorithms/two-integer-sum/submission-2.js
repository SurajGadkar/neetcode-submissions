class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compMap = {};
        for(let i = 0; i < nums.length; i++){
            let comp = target - nums[i];
            if(compMap[nums[i]] === undefined){
                compMap[comp] = i
            }else{
                return [compMap[nums[i]], i]
            }
        }
    }
}
