
const get_random_digit = (n = 10) => {
    let multiplier = Math.pow(10, n - 1)
    return Math.floor(1 * multiplier + Math.random() * 9 * multiplier);
    
}

export default get_random_digit;