function decode(message) {
    let from = parseInt(message.indexOf("("))
    let to = parseInt(message.indexOf(")"))
    if (from === -1 || to === -1){
        return message
    }
    for (let i = 0;i<message.length; i++) {
        if (message[i] === "("){
            from = i+1
        } else  if (message[i] === ")"){
                to = i
                break
        }
    }
    let inBrackets = message.slice(from, to)
    let inBracketsArray = []
    for (const letter of inBrackets){
        inBracketsArray.push(letter)
    }
    let inBracketsInversed = inBracketsArray.reverse().join("")
    let result = message.replace(`(${inBrackets})`,inBracketsInversed)
    return  decode(result)
}1
