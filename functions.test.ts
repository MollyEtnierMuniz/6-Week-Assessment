const {shuffleArray} = require('./utils')
let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(shuffleArray()).toBe(Array)
    })
    test('shuffleArray returns array = lenth sent in', () => {
        let results =shuffleArray.length
        expect(testArr.length()).toEqual (results.lenth)
    })
    test('shuffleArray contains all the same items'), () => {
        expect (shuffleArray()).toContain (shuffleArray)
    }
    test('shuffleArray has been shuffled'), () => {
        expect(shuffleArray()).not.toBe (shuffleArray)
    }

})