import React from 'react';
import styled from 'styled-components';
import MessagesDisplay from './messagesDisplay/MessagesDisplay';
import MessageInput from './messageInput/MessageInput';
import { CONTENT_WIDTH } from '../../data';

interface Props {}

const Container = styled.div`
  border: 1px solid blue;
  width: 100%;
  max-width: ${CONTENT_WIDTH}; /*For margins*/
  height: 100vh;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 75px;
`;

const Messenger: React.FC<Props> = () => {
  return (
    <Container>
      <MessagesDisplay />
      <MessageInput />
    </Container>
  );
};

export default Messenger;
