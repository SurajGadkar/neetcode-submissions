class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * {
     *  2 : 1
     *  20: 1
     *  4 : 2
     *  10 : 1
     *  3 : 1
     *  5 : 1
     * My intution was to make this loop up table then u know 
     * which number is start of the sequence by making sure nums[i] doesnt have a nums[i] - 1 , that means it could be a start of the sequence
     * then i had few ideas on how to check the next number in the seq and udpate the max. but im stuck
     * 
     * }
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        const map = new Map();
        let longest = 1;
        for (let i = 0; i < nums.length; i++){
            map.set(nums[i], map.get(nums[i]) + 1 ||  1) 
        }  

        for(let i = 0; i < nums.length; i++){
            let max = 1;
            if(!map.has(nums[i] - 1)){
                let curr = nums[i]
                while(map.has(curr + 1)){
                    max += 1;
                    curr += 1;
                }
                if(max > longest){
                    longest = max
                }
            }
        }
        return longest

    }
}
