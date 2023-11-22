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

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterMap = styled.div`
  border-radius: 7px;
  height: 300px;
  overflow: hidden;

  & iframe {
    height: 100%;
    min-height: 250px;
  }
`;

export const FooterLinkList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  gap: 25px;
`;

export const FooterLink = styled.li`
  margin-top: 20px;

  svg:hover {
    transition: all .25s ease-in-out;
    transform: scale(1.15);
    cursor: pointer;
  }
`;

export const FooterNavList = styled.nav`
  display: flex;
  flex-direction: column;
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

export const FooterRights = styled.ul`
  margin: 40px 0 0;
`;
