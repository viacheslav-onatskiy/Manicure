import { ButtonHTMLAttributes, FormEventHandler } from 'react';
import styled, { css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'default' | 'primary' | 'outlined';
type ButtonFormType = 'default' | 'rounded1' | 'rounded2' | 'squared';

export interface StyledButtonProps {
  $variant?: ButtonVariant;
  variant?: ButtonVariant;
  $size?: ButtonSize;
  size?: ButtonSize;
  $formType?: ButtonFormType;
  formType?: ButtonFormType;
  color?: string;
  fontSize?: string;
  ref?: any;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {
  onClick?: FormEventHandler<HTMLElement> | any;
}

const commonButtonStyles = css<StyledButtonProps>`
  color: ${({ color, theme }) => color || theme.colors.dark1};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  border: 2px solid transparent;
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: max-content;
  transition: all 0.2s ease;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    padding: 5px 15px;
    font-size: ${({ fontSize }) => fontSize || '16px'};
  }

  &.fullWidth {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.dark2};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
  }
`;

const primaryButtonStyles = css<StyledButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary2};
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary3};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary1};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
`;

const outlinedButtonStyles = css<StyledButtonProps>`
  outline: 2px solid ${({ theme }) => theme.colors.primary2};
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.primary3};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    outline: 2px solid ${({ theme }) => theme.colors.primary1};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
`;

const smallButtonStyles = css<StyledButtonProps>`
  font-size: 14px;
  padding: 4px 10px;
`;

const largeButtonStyles = css<StyledButtonProps>`
  font-size: 18px;
  padding: 10px 24px;
`;

export const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
  $variant: props.$variant || 'default',
  $size: props.$size || 'medium',
  $formType: props.$formType || 'default'
}))`
  ${commonButtonStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return primaryButtonStyles;
      case 'outlined':
        return outlinedButtonStyles;
      default:
        return null;
    }
  }}
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return smallButtonStyles;
      case 'large':
        return largeButtonStyles;
      default:
        return null;
    }
  }}
  
  ${({ $formType }) => {
    switch ($formType) {
      case 'rounded1':
        return css`
          border-radius: 10px;
        `;
      case 'rounded2':
        return css`
          border-radius: 26px;
        `;
      case 'squared':
        return css`
          border-radius: 0;
        `;
      default:
        return null;
    }
  }}
`;
