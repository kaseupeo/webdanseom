import styled from 'styled-components';
const StyleButton = styled.button`
  background-color: white;

  border: solid thin #40586a;
  border-radius: 2px;
  color: #40586a;
  font-size: 1rem;
  z-index: 100;
  margin: 3px;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: #d4e4f0;
  }
`;

const StyleSetButton = styled.button`
  background-color: #40586a;
  border-radius: 2px;
  border: solid thin #40586a;
  color: white;
  font-size: 1rem;
  z-index: 100;
  margin: 3px;
  padding: 5px 15px 5px 15px;
  &:hover {
    background-color: #556775;
  }
`;

export const Button = (props) => <StyleButton {...props} />;

export const SetButton = (props) => <StyleSetButton {...props} />;
