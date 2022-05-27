import styled from 'styled-components';
const TitleStyle = styled.header`
  font-style: bold;
  color: black;
  margin-bottom: 0rem;
  font-size: 1.5rem;
  display: flex;
  align-items: left;
  justify-content: left;
  z-index: -20;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Title = ({ title }) => {
  return (
    <TitleStyle>
      <b>{title}</b>
    </TitleStyle>
  );
};

export default Title;
