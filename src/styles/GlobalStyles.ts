import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
body {
  font-family: var(--font-greycliffcf), Helvetica, Calibri, sans-serif;}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
}
button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: var(--font-greycliffcf), Helvetica, Calibri, sans-serif;
  color: ${({ theme }) => theme.colors.dark};
}
input {
  border: none;
  outline: none;
}
ul {
  list-style-type: none;
}
li{
  font-size: 0.875rem;
}
h1{
    font-size: 2.625rem;
    font-weight: 700;
}
h2 {
    font-size: 2rem;
    font-weight: 700;
}
h3{
    font-size: 1.5rem;
    font-weight: 700;
} 
h4{
    font-size: 1.125rem;
    font-weight: 700;
}
h5{
    font-size: 0.875rem;
    font-weight: 500;
}
h6{
    font-size: 0.75rem;
    font-weight: 500;
}
small{
    font-size: 0.725rem;
    font-weight: 700;
}
sup{
    font-size: 0.5rem;
}
`;
export default GlobalStyles;
