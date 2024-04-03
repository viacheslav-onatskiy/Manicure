import styled from 'styled-components';

export default {
  NotFoundWrapper: styled.div`
    text-align: center;
    margin: 50px;
    height: 100%;
    color: ${({ theme }) => theme.colors.dark1};

    .notFound- {
      &heading {
        margin-top: 30px;
        color: ${({ theme }) => theme.colors.dark};
      }

      &error {
        margin-top: 30px;
        color: ${({ theme }) => theme.colors.dark};
      }

      &description {
        margin-top: 30px;
        color: ${({ theme }) => theme.colors.dark};
      }

      &button {
        margin-top: 40px;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.dark};

        @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
          font-size: 20px;
        }
      }
    }
  `
};
