// In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

// You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

// Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''
// Please, keep in mind:

// There will always be one different step or none.
// The modification can occur anywhere in the string.
// The original steps could be empty

function findNaughtyStep(original, modified) {
    const oLength = original.length
    const mLength = modified.length
    let result = ""
    let founded = false
    const minorLength = oLength > mLength ? mLength : oLength
    for (let i = 0; i<minorLength;i++ ) {
      if (original[i] !== modified[i] && !founded){
        result = oLength < mLength ? modified[i] : original[i]
        founded = true
      }
    }
    if (!founded && oLength !== mLength ) {
      if(oLength < mLength){
      result = modified[oLength]
    } else {
      result = original[oLength]
    }}
    return result
  }