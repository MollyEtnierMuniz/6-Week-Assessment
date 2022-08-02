const {shuffleArray} = require('./utils')
let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    let results =shuffleArray(testArr)
    test('shuffleArray returns an array', () => {
        expect(shuffleArray()).toBe(results.testArr)
    })
    test('shuffleArray returns array = lenth sent in', () => {
        let results =shuffleArray(testArr)
        expect(testArr.length).toEqual (results.length)
    })
    test('shuffleArray contains all the same items'), () => {
        let results =shuffleArray(testArr)
        expect (testArr).toContain (results.testArr)
    }
    test('shuffleArray has been shuffled'), () => {
        let results =shuffleArray(testArr)
        expect(testArr).not.toBe (results.testArr)
    }

})