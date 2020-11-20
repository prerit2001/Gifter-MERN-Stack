import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const Container = styled.div`
   z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 55px;
    padding-left: 55px;

    @media screen and (max-width: 990px){
        padding-right: 25px;
        padding-left: 25px;
    }
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  right: 0;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-outs;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    font-size: 10px;
  }
`;

export default GlobalStyle;