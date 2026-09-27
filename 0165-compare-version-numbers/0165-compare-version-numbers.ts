function compareVersion(version1: string, version2: string): number {
    let version1Array = version1.split(".");
    let version2Array = version2.split(".");
    let version1Length = version1Array.length;
    let version2Length = version2Array.length;

    for(let i=0; i < Math.max(version1Length, version2Length); i++){
        let revision1 = Number(version1Array[i] || 0);
        let revision2 = Number(version2Array[i] || 0);
        if(revision1 < revision2){
            return -1;
        }
        else if(revision1 > revision2) return 1;
    }
    return 0;
};