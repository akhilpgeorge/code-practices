function strStr(haystack: string, needle: string): number {
    let needleLength = needle.length;
    let haystackLength = haystack.length;
    if(needleLength > haystackLength) return -1;
    for(let i=0; i<=(haystackLength-needleLength); i++) {
        if(haystack.substring(i,(i+needleLength)) === needle) {
            return i;
        }
    }
    return -1;
};