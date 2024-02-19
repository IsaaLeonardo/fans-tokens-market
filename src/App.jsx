import styled from '@emotion/styled'
import Amico from './img/amico.svg'

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
  return (
    <Container>
      <Image
        src={Amico}
        alt="Fans celebrating"
      />
      <Heading>Hola Mundo</Heading>
    </Container>
  )
}

export default App
