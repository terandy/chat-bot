import React from 'react';
import styled from 'styled-components';

interface Props {}
let array: number[] = [];
for (let i = 0; i < 100; i++) {
  array.push(i);
}
const Container = styled.div`
  background-color: lightblue;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;
const Home: React.FC<Props> = () => {
  return (
    <Container>
      {array.map(number => (
        <div>{number}</div>
      ))}
    </Container>
  );
};

export default Home;
