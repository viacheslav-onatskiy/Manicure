import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary4};
  color: ${({ theme }) => theme.colors.primary5};

  & .auth-redirect-paragraph {
    margin: 20px 0;
    text-align: center;
  }
`;

export const AuthContainer = styled.div`
  padding: 35px 0;
`;

export const AuthForm = styled.form`
  width: 50%;
  margin: 0 auto;
`;

export const AuthButton = styled.div`
  margin: 20px 0 0;
  text-align: center;

  & .auth-button {
    margin: 0 auto;
  }
`;
