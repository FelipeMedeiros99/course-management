const moneyFormat = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const convertToValidFloat = (num: string | number) => {
  return Number(`${num}`.replace(",", "."))
}

export { moneyFormat, convertToValidFloat }

