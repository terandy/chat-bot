import React, { useState } from 'react';
import Container from './message-input-style';

interface Props {}

const MessengeInput: React.FC<Props> = () => {
  let [msg, setMsg] = useState<string>('');

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    let data = new FormData();
    data.append('msg', msg);
    data.append('sender', 'me');
    fetch('/send-msg', {
      method: 'POST',
      body: data
    });
    setMsg('');
  };

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setMsg(evt.target.value);
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Write message..."
          onChange={changeHandler}
          value={msg}
        />
        <button className="send-button">submit</button>
      </form>
    </Container>
  );
};

export default MessengeInput;
