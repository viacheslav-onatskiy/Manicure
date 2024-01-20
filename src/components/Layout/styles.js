import styled from 'styled-components';

export const MainOutlet = styled.main`
  margin-top: 40px;
  flex: 1;
  white-space: pre-line;

  .container {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1024px) {
      max-width: 100%;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;
