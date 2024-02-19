import styled from "@emotion/styled"

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
  return (
    <form>
      <SubmitButton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Form
