import styled from "@emotion/styled"

const Div = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-family: 'Latto', sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
`

function Error({ children }) {
  return (
    <Div>
      <p>{ children }</p>
    </Div>
  )
}

export default Error
