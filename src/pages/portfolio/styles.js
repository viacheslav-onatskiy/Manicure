import styled from 'styled-components';
import { Heading4 } from '../../components/common/styles';

export const PortfolioHeading = styled(Heading4)`
  text-align: center;
  padding: 25px 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    padding: 15px 0 0;
    font-size: 20px;
  }
`;
