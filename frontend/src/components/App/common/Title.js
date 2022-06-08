import styled from 'styled-components';
const TitleStyle = styled.header`
  font-style: bold;
  color: black;

  margin-bottom: 0rem;
  font-size: 1.5rem;

  align-items: left;
  justify-content: left;

  padding-right: 0rem;
`;

const Title = ({ title }) => {
  return (
    <TitleStyle>
      <b>{title}</b>
    </TitleStyle>
  );
};

export default Title;
