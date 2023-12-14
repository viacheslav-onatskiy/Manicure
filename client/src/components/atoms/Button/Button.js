import { forwardRef } from 'react';
import { StyledButton } from './styles';

const Button = forwardRef(({ variant, size, formType, children, ...props }, ref) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $formType={formType}
      {...props}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
});

export default Button;
