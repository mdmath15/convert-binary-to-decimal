import { binaryToDecimal } from '.'

describe('BinaryToDecimal', () => {
  test('Should return a decimal number when receive a string with paramater', () => {
    const binaryString = '1011100'
    const result = binaryToDecimal(binaryString)
    expect(result).toBe(92)
  })

  test('Should return a decimal number when receive a number with paramater', () => {
    const binaryString = 1011100
    const result = binaryToDecimal(binaryString)
    expect(result).toBe(92)
  })

  test('Should throws when it does not receive a binary number or', () => {
    const binaryString = '1011100c'
    expect(() => binaryToDecimal(binaryString)).toThrow('Invalid parameter')
  })
})
