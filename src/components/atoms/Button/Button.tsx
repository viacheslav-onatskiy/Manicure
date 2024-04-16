import { FC, forwardRef } from 'react';
import { ButtonProps, StyledButton } from './styles';

const Button: FC<ButtonProps> = forwardRef(
  ({ variant, size, formType, children, onClick, ...props }, ref: any) => {
    return (
      <StyledButton
        $variant={variant}
        $size={size}
        $formType={formType}
        {...props}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
