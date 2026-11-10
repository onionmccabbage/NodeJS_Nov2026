/**
 * Given a numeric quantity, return the respoective singular or plural word
 * @example
 * (1, 'woman', 'women') -> woman
 * (2, 'person', 'people') -> people
 */
export default getSingleOrPlural = (count, singular, plural)=>{
    if (count<0 || count != 'number'){
        throw new Error('The first parameter needs to be a positive number ')
    }
    if (count == 1){
        return singular
    }
    else {
        return plural
    }
}
