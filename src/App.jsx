import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Amico from './img/amico.svg'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

	@media (max-width: 728px) {
    display: block;
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
	}
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  color: #FFF;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [ currencies, setCurrencies ] = useState({})
  const [ result, setResult ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    if (Object.keys(currencies).length === 0) return

    const { currency, crypto } = currencies

    const callApi = async () => {
      setResult({})
      setLoading(true)

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
      const response = await fetch(url)
      const result = await response.json()

      setResult(result.DISPLAY[crypto][currency])

      setLoading(false)
    }

    callApi()
  }, [currencies])

  return (
    <Container>
      <Image
        src={Amico}
        alt="Fans celebrating"
      />
      <div>
        <Heading>Hola Mundo</Heading>
        <Form
          setCurrencies={setCurrencies}
        />

        {
          loading && (
            <Spinner />
          )
        }

        {
          result.PRICE && (
            <Result
              result={result}
            />
          )
        }
      </div>
    </Container>
  )
}

export default App
