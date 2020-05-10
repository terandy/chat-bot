import styled from 'styled-components';
const Container = styled.div`
  border: 1px solid blue;
  form {
    width: 100%;
    height: 100%;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr 100px;
    grid-column-gap: 0.2em;
    padding: 0.2em;
    .input {
      border-radius: 2em;
      font-size: 1em;
      padding-left: 2em;
      border: lightgrey 2px solid;
      &:focus {
        outline: 0;
      }
    }
    .send-button {
      background-color: purple;
      color: white;
      font-size: 1em;
      border: 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default Container;
