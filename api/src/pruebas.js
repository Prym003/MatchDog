const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const solution1 = (string) => {
    if (!string.length) return 'empty string'
    //we store how many of each letter we have in an object where each key = letter and value = quantity
    let count = {}
    for (let i = 0; i < string.length; i++) {
        // if the letter already exists in our object we just add 1, if it does not exist we create the letter with value = 1
        count[string[i]] ? count[string[i]]++ : count[string[i]] = 1
    }
    // we order the obj 'count' by the key's
    count = Object.keys(count).sort().reduce(
        (obj, key) => {
            obj[key] = count[key]
            return obj
        }, {}
    )
    //we check if the last letter of our ordered object is in the same position in the alphabet
    let check1 = Object.keys(count)[Object.keys(count).length - 1] === alphabet[Object.keys(count).length - 1]
    console.log(check1)
    // we check if a letter does not appear more times than the previous letter according to the alphabet
    let check2 = Object.values(count).sort((a, b) => b - a).join('') === Object.values(count).join('')
    console.log(check2)
    if (check1 && check2) return true
    return false
}
let n = 'aabbb'
console.log(solution1(n))

const solution2 = (arr) => {
    let result = []
    for (let i = 0; i < arr.length - 2; i++) {
        let check1 = (arr[i] + arr[i + 1]) > arr[i + 2]
        let check2 = (arr[i] + arr[i + 2]) > arr[i + 1]
        let check3 = (arr[i + 1] + arr[i + 2]) > arr[i]
        // console.log((check1 || check2))
        // console.log((check1 || check2) && check3)
        if (check1 && check2 && check3) {
            result = [...result, 1]
        } else {
            result = [...result, 0]
        }
    }
    return result
}
console.log(solution2([2, 10, 2, 10, 2]))


let solution3 = (length) => {
    let fence = Array(length).fill(false)
    return (left, right) => {
        fence.fill(true, left, right+1)
        // console.log(fence.filter(el => el !== true).length)
        return `the remainign length of the white fence is ${fence.filter(el => el !== true).length}`
    }
}

const func2 = solution3(20)

console.log(func2(18,18))
console.log(func2(0,3))
console.log(func2(17,19))
console.log(func2(0,19))