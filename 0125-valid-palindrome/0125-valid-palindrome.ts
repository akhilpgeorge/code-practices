function isPalindrome(s: string): boolean {
    const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return clean === clean.split("").reverse().join("");
};