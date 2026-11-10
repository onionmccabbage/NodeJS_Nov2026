import { expect, test, describe } from 'vitest'
import getSingleOrPlural from './singlePlural'

describe('Return singular for one item', () => {
    test('retrun singular when count is 1', () => {
        expect(1 == 1).toBeTruthy // we expect true
        expect(getSingleOrPlural(1, 'woman', 'women')).to.equal('woman')
    })
})
describe('Return plural for morethan one item', () => {
    test('retrun plural when the coutn is greater than 1', () => { })
    expect(getSingleOrPlural(3, 'woman', 'women')).to.equal('women')
})
describe('Throw an error correctly', () => {
    test('should throw an error for negative quantity', () => {
        expect(()=>{getSingleOrPlural(-3, 'goose', 'geese')}).toThrow('The first parameter needs to be a positive number ')
    })
    describe('Handle Zero quantity correctly', () => {
        test('return plural for zero quantity', () => {
            expect(getSingleOrPlural(0, 'goose', 'geese')).to.equal('geese')
        })
    })
})