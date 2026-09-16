function countAndSay(n: number): string {
    let answer: string = "1";
    for(let i=1; i<n; i++) {
        answer = getRle(answer);
    }
    return answer;
};

function getRle(input: string): string {
    let rle: string = "";
    
    for (let i = 0; i < input.length; i++) {
        let currentCharacter = input[i];
        let currentCharacterCount = 1;
        while(input[i+1] === currentCharacter){
            currentCharacterCount++;
            i++;
        }
        rle += currentCharacterCount.toString()+currentCharacter;
    }
    return rle;
}