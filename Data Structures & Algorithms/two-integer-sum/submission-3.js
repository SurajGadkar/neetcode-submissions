class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(); 

        for(let i = 0; i < nums.length; i++){
            const comp = target - nums[i]
            if(map.has(comp)){
                const result = map.get(comp)
                return [result, i]
            }else{
                map.set(nums[i], i)
            }
        }
    }
}
