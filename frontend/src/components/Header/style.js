import styled from 'styled-components'



export const Container = styled.div`
 
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
`