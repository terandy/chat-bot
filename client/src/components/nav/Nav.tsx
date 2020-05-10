import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NAV_HEIGHT, CONTENT_WIDTH } from '../../data';
import { useSelector, useDispatch } from 'react-redux';

interface Props {}
interface StyledProps {
  topNavDisplay: boolean;
}
const UpperNav = styled.div<StyledProps>`
  z-index: 1000;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 2px solid lightgrey;
  height: ${NAV_HEIGHT};
  width: 100%;
  position: fixed;
  top: ${props => (props.topNavDisplay ? '0' : '-' + NAV_HEIGHT)};
  transition: top 0.4s ease-in-out;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${CONTENT_WIDTH}; /*For margins*/
  margin: auto; /*For margins*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  a {
    margin-right: 10px;
  }
`;
interface RootState {
  topNavDisplay: boolean;
  innercontainerRef: HTMLDivElement;
}
const Nav: React.FC<Props> = () => {
  const dispatch = useDispatch();
  let topNavDisplay = useSelector((state: RootState) => state.topNavDisplay);
  let topNavDisplayRef = useRef<boolean>();
  topNavDisplayRef.current = topNavDisplay;
  const toggleNav = (content: boolean) => {
    dispatch({ type: 'toggle-topNavDisplay', content: content });
  };
  useEffect(() => {
    var scrollPos = 0;
    window.onscroll = () => {
      let position = document.body.getBoundingClientRect().top;
      if (
        position < 0 &&
        position > window.innerHeight - document.body.clientHeight
      ) {
        if (position > scrollPos) {
          if (!topNavDisplayRef.current) {
            toggleNav(true);
          }
        } else {
          if (topNavDisplayRef.current) {
            toggleNav(false);
          }
        }
      }
      scrollPos = document.body.getBoundingClientRect().top;
    };
  }, []);

  return (
    <UpperNav topNavDisplay={topNavDisplay}>
      <Container>
        <div>
          <Link to="/">Home</Link>
          <Link to="/messenger/1">Messages</Link>
        </div>
        <div>nav Bar</div>
      </Container>
    </UpperNav>
  );
};

export default Nav;
