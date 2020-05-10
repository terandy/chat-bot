import React, { useState } from 'react';
import Container from './message-input-style';

interface Props {
  initialText?: string;
}

const MessengeInput: React.FC<Props> = ({ initialText = '' }) => {
  let [text, setText] = useState(initialText);
  const submitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    console.log(text);
    setText('');
  };
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setText(evt.target.value);
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Write message..."
          onChange={changeHandler}
          value={text}
        />
        <button className="send-button">submit</button>
      </form>
    </Container>
  );
};

export default MessengeInput;
