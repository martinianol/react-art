import { styled } from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  line-height: inherit;
  &:hover {
    background-color: #f0920e;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
