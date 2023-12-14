import styled from 'styled-components';

export const ContactWrapper = styled.div`
  & iframe {
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

  a {
    color: ${({ theme }) => theme.colors.primary1};
  }

  &:hover {
    svg,
    a {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  &:active {
    svg,
    a {
      color: ${({ theme }) => theme.colors.primary2};
    }
  }
`;

export const ContactLink = styled.a`
  display: flex;
  gap: 15px;
`;

export const ContactIcon = styled.div`
  align-self: center;
  color: var(--toastify-text-color-light);
`;
