import styled, { css }from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps> `
    background: #eae0d5;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #eae0d5;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    ${(props) =>
      props.isFocused &&
      css`
        color: #ef233c;
        border-color: #ef233c;
    `}

    ${(props) =>
      props.isFilled &&
      css`
        color: #ef233c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }

   svg {
    margin-right: 16px;
  }
`;
