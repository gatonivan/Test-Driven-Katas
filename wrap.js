const wrap = (line, maxLen) => {
    let remainderStr = "";
    let returnStr =  ""
    while(line.length > maxLen) {
        let cutLines = line.indexOf(" ")
        remainderStr = line.slice(cutLines +1, line.length)
        // console.log(remainderStr);
    if(cutLines >= maxLen) {
        returnStr += line.slice(0, line.indexOf(" ")) + "\n"
        line = remainderStr;
        } 
    }
    return returnStr + remainderStr
}

module.exports = wrap;