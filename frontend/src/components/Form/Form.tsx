import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  top: 55px;

  border: solid 1px black;
  padding: 10px 6px;

  background-color: white;

  z-index: 2;

  width: 40vw;
  min-width: 200px;
  max-width: 400px;
`;

export const StyledForm = styled.form``;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-row-gap: 8px;

  padding: 5px 2px;
`;
