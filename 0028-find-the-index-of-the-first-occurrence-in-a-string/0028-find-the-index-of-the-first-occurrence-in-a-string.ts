function strStr(haystack: string, needle: string): number {
    let needleLength = needle.length; //3
    let haystackLength = haystack.length; //9
    if(needleLength > haystackLength) return -1;
    for(let i=0; i<=(haystackLength-needleLength); i++) {
        console.log(`substring= ${haystack.substring(i,(i+needleLength))}`);
        console.log(`needle= ${needle}`);
        if(haystack.substring(i,(i+needleLength)) === needle) {
            return i;
        }
    }
    console.log(`return -1 and exit code`);
    return -1;
};