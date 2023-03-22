const sum = require('./sum')

// 1+2=3
test('Validate if sum function adds two numbers', () =>{
    expect(sum(1,2)).toBe(3)
}) 