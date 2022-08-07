import styled from "styled-components"



const Container = styled.div`
    height: 30px;
    background-color: teal;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
    justify-content: center;
`

const Annoucement = () => {
  return (
    <Container>Superdeal Available</Container>
  )
}

export default Annoucement;