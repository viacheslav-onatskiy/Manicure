import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 80%;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    width: 100%;
    height: 100%;
    padding: 30% 20px;

    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    gap: 5%;

    margin-top: 25px;

    textarea {
      font-size: 20px;
    }
  }

  .modal__rating {
    margin-top: 15px;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      margin-top: 25px;

      svg {
        width: 45px;
        height: 45px;
      }
    }
  }

  .modal__button {
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      margin-top: 20px;
      font-size: 25px;
    }
  }
`;

export const StyledAlert = styled.div`
  padding: 10px;
  color: #f44336;
  margin-top: 10px;
  border-radius: 5px;
`;
