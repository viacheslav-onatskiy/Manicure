import styled from 'styled-components';

export const ContactWrapper = styled.div`
  & iframe {
    min-height: 350px;
    flex: 1 1 100%;
  }
`;

export const ContactList = styled.ul``;

export const ContactListItem = styled.li`
  border-bottom: 1px solid var(--toastify-text-color-light);
  margin-top: 10px;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    margin-top: 0;
  }
`;

export const ContactDescription = styled.div`
  font-size: 18px;
  display: flex;
  width: max-content;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    justify-content: center;
    width: 100%;
  }

  .footer__link {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    svg,
    a {
      color: ${({ theme }) => theme.colors.dark1};
    }
  }

  &:active {
    svg,
    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const ContactLink = styled.a`
  display: flex;
  gap: 15px;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    gap: 5px;
  }
`;

export const ContactIcon = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.grey};
`;
