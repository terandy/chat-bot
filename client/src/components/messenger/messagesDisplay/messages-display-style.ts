import styled from 'styled-components';
import { NAV_HEIGHT } from '../../../data';

interface StyledProps {
  topNavDisplay: boolean;
}

const Container = styled.div<StyledProps>`
  border: 1px solid blue;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  padding-top: ${props =>
    props.topNavDisplay ? NAV_HEIGHT : '0'}; /*For top Nav */
  transition: padding-top 0.4s ease-in-out;
`;

export default Container;
