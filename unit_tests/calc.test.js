import {expect, test, describe} from 'vitest'
import { add } from './calc' // we may need to say calc.js

describe('Check addition of two numbers', ()=>{
    // here we write our tests
    test('should return the correct sum of two numbers', ()=>{
        const result = add(2,3)
        expect( result ).toBe(5)
    })
    test( 'should throw an exception for non-numeric inputs', ()=>{
        expect( ()=>{add('a', 'b')} ).toThrow()  
    } )
})