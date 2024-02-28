import styled from "@emotion/styled"
import currencies from "../../data/currencies.js"
import useCurrencySelect from "../hooks/useCurrencySelect.jsx"
import { useEffect } from "react"

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
  const [ CurrencySelect, currenciesState ] = useCurrencySelect('Elige tu moneda', currencies)

  useEffect(() => {
    const callApi = async (url) => {
      const response = await fetch(url)
      
      return response.json()
    }

    callApi(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
  }, [])

  return (
    <form>
      <CurrencySelect />

      <SubmitButton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Form
