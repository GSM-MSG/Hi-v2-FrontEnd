import styled from "@emotion/styled";

export const FloorLocationModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  button {
    width:89px;
    height: 36px;
    color: ${({theme}) => theme.color.white};
    border: 1px solid ${({theme}) => theme.color.primary};
    background: ${({theme}) => theme.color.primary };
    border-radius: 8px;
    ${({theme}) => theme.typography.body2.bold};
  }
`