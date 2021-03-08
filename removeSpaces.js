function removeSpaces(arr) {
    let extra_r = false, ans = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == '\r' || arr[i] == '') {
            if(extra_r) 
                continue;
            else {
                ans.push(arr[i]);
                extra_r = true;
            }
        } else {
            ans.push(arr[i]);
            extra_r = false;
        }
    }
    return ans;
}
 
module.exports = {
    fn : removeSpaces,
};