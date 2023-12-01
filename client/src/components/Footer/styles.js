import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 80px 150px;
  text-align: center;

  &.advantages {
    background-color: white;
    color: #333333;
  }

  & .container {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterSection = styled.footer`
  background-color: var(--dark);
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
`;

export const FooterLink = styled.li`
  & svg:hover {
    transition: all 0.25s ease-in-out;
    transform: scale(1.15);
    cursor: pointer;
  }
`;

export const FooterNavList = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FooterIconsLinkList = styled.div`
  display: flex;
  gap: 15px;
  svg {
    width: 36px;
    height: 36px;
  }
`;

export const FooterLine = styled.div`
  width: 100%;
  border: 1px solid #2f2e42;
  margin: 20px;
`;

export const FooterNavLink = styled(Link)`
  color: #f0f0f0;
  margin: 5px 0 0;
  padding: 10px 14px;
  border-radius: 6px;

  &:hover {
    background-color: #fd4d99;
    transform: scale(1.05);
    box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.45);
  }
`;

export const FooterRightsWrapper = styled.div`
  background-color: var(--darker);
  color: white;
  text-align: center;
  padding: 15px 0;
`;

export const FooterRights = styled.div``;
