import styled from 'styled-components';

export const MainOutlet = styled.div`
  margin-top: 40px;

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
