import React, { useRef, useEffect } from 'react';
import Messenger from './messenger/Messenger';
import Nav from './nav/Nav';
import Home from './home/Home';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CONTENT_WIDTH, NAV_HEIGHT } from '../data';
interface StyledProps {
  topNavDisplay: boolean;
}
const InnerContainer = styled.div<StyledProps>`
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  align-items: center; /*For margins*/
  max-width: ${CONTENT_WIDTH}; /*For margins*/
  margin: auto;
  padding-top: ${props =>
    props.topNavDisplay ? NAV_HEIGHT : '0px'}; /*For top Nav */
  transition: padding-top 0.4s ease-in-out;
`;
interface Props {}
interface RootState {
  topNavDisplay: boolean;
}
const App: React.FC<Props> = () => {
  let topNavDisplay = useSelector((state: RootState) => state.topNavDisplay);
  return (
    <BrowserRouter>
      <Nav />
      <InnerContainer topNavDisplay={topNavDisplay}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/messenger/:mid" component={Messenger} />
        </Switch>
      </InnerContainer>
    </BrowserRouter>
  );
};

export default App;
