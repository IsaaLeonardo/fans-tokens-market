import styled from "@emotion/styled"

const Container = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
`

const ParagraphPrice = styled.p`
  font-size: 30px;

  span {
    font-weight: 700;
  }
`

const ParagraphText = styled.p`
  font-size: 18px;

  span {
    font-weight: 700;
  }
`

function Result({ result }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = result

  return (
    <Container>
      <ParagraphPrice>El precio es de: <span>{ PRICE }</span></ParagraphPrice>
      <ParagraphText>El precio más alto del día: <span>{ HIGHDAY }</span></ParagraphText>
      <ParagraphText>El precio más bajo del día: <span>{ LOWDAY }</span></ParagraphText>
      <ParagraphText>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></ParagraphText>
      <ParagraphText>Última actualización: <span>{ LASTUPDATE }</span></ParagraphText>
    </Container>
  )
}

export default Result
