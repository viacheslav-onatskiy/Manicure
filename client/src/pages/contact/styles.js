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

  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    margin-top: 0;
  }
`;

export const ContactDescription = styled.div`
  padding: 10px 0;
  font-size: 18px;
  display: flex;
  width: max-content;

  a,
  .contact-hours {
    color: var(--toastify-text-color-light);
  }

  &:hover {
    svg {
      color: #fd4d99;
    }
    a {
      color: var(--dark);
    }
  }
`;

export const ContactLink = styled.a`
  margin-left: 15px;
`;

export const ContactIcon = styled.div`
  align-self: center;
  color: var(--toastify-text-color-light);
`;
