import styled from 'styled-components';
const StyleButton = styled.button`
  background-color: white;
  white-space: nowrap;
  border: solid thin #40586a;
  border-radius: 2px;
  color: #40586a;
  font-size: 1rem;
  z-index: 100;
  overflow: hiddlen;
  margin: 3px;
  padding: 5px 10px 5px 10px;

  @media (max-width: 1000px) {
    font-size: 0.5rem;
  }

  &:hover {
    background-color: #d4e4f0;
  }
`;

const StyleTempButton = styled.button`
  background-color: #40586a;
  white-space: nowrap;
  overflow: hiddlen;
  border-radius: 2px;
  border: solid thin #40586a;
  color: white;
  font-size: 1.1rem;
  z-index: 100;
  margin: 5px;
  padding: 6px 20px 6px 20px;

  &:hover {
    background-color: #556775;
  }
  @media (max-width: 800px) {
    font-size: 0.5rem;
  }
`;

const StyleSetButton = styled.button`
  background-color: #40586a;
  white-space: nowrap;
  overflow: hiddlen;
  border-radius: 2px;
  border: solid thin #40586a;
  color: white;
  font-size: 1.1rem;
  z-index: 100;
  margin: 5px;
  padding: 6px 20px 6px 20px;

  &:hover {
    background-color: #556775;
  }
  @media (max-width: 1000px) {
    font-size: 0.5rem;
  }
`;

const StyleMiniButton = styled.button`
  color: white;

  background-color: #40586a;
  border-radius: 2px;
  margin: 0.5rem;
  margin-right: 0rem;
  height: 1.8rem;
  width: 4rem;
  &:hover {
    color: white;
    background-color: #556775;
  }
`;

const ButtonSet = () => {
  return;
};

export const Button = (props) => <StyleButton {...props} />;
export const ButtonTempSet = (props) => <StyleTempButton {...props} />;
export const SetButton = (props) => <StyleSetButton {...props} />;
export const MiniButton = (props) => <StyleMiniButton {...props} />;
export default ButtonSet;
