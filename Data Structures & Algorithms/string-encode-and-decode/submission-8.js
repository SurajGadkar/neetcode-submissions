class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = "";

        strs.forEach(str => {
            let encode = `${str.length}#` + str
            encoded_string += encode
        })

        return encoded_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     * 0#1#v1#n
     * 
     */
    decode(str) {
        let decoded_strs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            // 1. Move j forward until str[j] === '#'
            while(str[j] !== '#'){
                j++
            }
            // 2. Extract length using str.substring(i, j)
            let len = Number(str.substring(i, j))
            // 3. Extract word using str.substring(j + 1, j + 1 + length)
            let word = str.substring(j+ 1, j + 1 + len)
            decoded_strs.push(word)
            // 4. Jump i directly to the start of the next length
            i = j + 1 + len
        }

        return decoded_strs
    }
}
