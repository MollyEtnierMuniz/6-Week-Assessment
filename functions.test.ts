const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(shuffleArray()).toBe(Array)
    })
    test('shuffleArray returns array = lenth sent in', () => {
        expect(shuffleArray()).toHaveLength (shuffleArray.lenth)
    })
    test('shuffleArray contains all the same items'), () => {
        expect (shuffleArray()).toContain (shuffleArray)
    }
    test('shuffleArray has been shuffled'), () => {
        expect(shuffleArray()).not.toBe (shuffleArray)
    }

})