function isPalindrome(s: string): boolean {
    const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(`clean - ${clean}`);
    let left = 0;
    let right = clean.length - 1;
    while(left < right) {
        if (clean[left] !== clean[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
};