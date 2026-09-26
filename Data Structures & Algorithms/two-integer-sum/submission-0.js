class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compMap = {};
        let result = []
        for(let i = 0; i < nums.length; i++){
            let comp = target - nums[i];
            if(compMap[nums[i]] === undefined){
                compMap[comp] = i
            }else{
                result = [compMap[nums[i]], i]
            }
        }

        return result
    }
}
