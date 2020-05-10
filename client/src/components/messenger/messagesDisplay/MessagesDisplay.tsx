import React from 'react';
import Container from './messages-display-style';
import { useSelector } from 'react-redux';

interface Props {}
interface RootState {
  topNavDisplay: boolean;
}
let array: number[] = [];
for (let i = 0; i < 100; i++) {
  array.push(i);
}
const MessengesDisplay: React.FC<Props> = () => {
  let topNavDisplay = useSelector((state: RootState) => state.topNavDisplay);
  return (
    <Container topNavDisplay={topNavDisplay}>
      {array.map(number => {
        return <div>Hello:{number}</div>;
      })}
    </Container>
  );
};

export default MessengesDisplay;
