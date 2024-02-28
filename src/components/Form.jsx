import styled from "@emotion/styled"
import currencies from "../../data/currencies.js"
import useCurrencySelect from "../hooks/useCurrencySelect.jsx"
import { useEffect, useState } from "react"

const SubmitButton = styled.input`
  background-color: #A281D0;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7F5DAD;
    cursor: pointer;
  }
`

function Form() {
  const [ cryptos, setCryptos ] = useState([])

  const [ CurrencySelect, currenciesState ] = useCurrencySelect('Elige tu moneda', currencies)
  const [ CryptoSelect, cryptosState ] = useCurrencySelect('Elige tu criptomoneda', cryptos)

  useEffect(() => {
    const callApi = async (url) => {
      const response = await fetch(url)
      const result = await response.json()

      const cryptos = result.Data.map(crypto => {
        return {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
      })

      setCryptos(cryptos)
    }

    callApi(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
  }, [])

  return (
    <form>
      <CurrencySelect />
      <CryptoSelect />

      <SubmitButton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Form
