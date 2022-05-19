import styled from 'styled-components';
const Title = ({ title }) => {
  const Title = styled.header`
    font-style: bold;
    color: black;
    margin-bottom: 0rem;
    font-size: 1.5rem;
    display: flex;
    align-items: left;
    justify-content: left;
    z-index: -20;
  `;
  return (
    <Title>
      <b>{title}</b>
    </Title>
  );
};

export default Title;
