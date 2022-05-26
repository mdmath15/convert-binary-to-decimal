export function binaryToDecimal(binary: string | number): number {
  // regex que só aceita caracteres 0 ou 1
  const regexBinary = new RegExp(/^[01]+$/g)
  
  // transforma o input para string caso ele seja um number
  binary = String(binary)

  // verifica se o valor passado é um número binário
  if (!regexBinary.test(binary)) {
    throw new Error('Invalid parameter')
  } else {
    // converte o input para array e inverte a ordem
    const binaryArray = binary.split('').reverse()

    // transforma o numero binário em decimal
    return binaryArray.reduce((acc, curr, index) => {
      return (acc += +curr * Math.pow(2, index))
    }, 0)
  }
}

const decimal = binaryToDecimal('1011100')
console.log(decimal)
