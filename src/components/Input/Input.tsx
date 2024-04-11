import { ChangeEvent } from 'react';
import { renderIcon } from '../../images/svgIcons';
import { InputIcon, InputLabel, InputStyle, InputWrapper } from './styles';

interface InputProps {
  id: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  iconType?: string;
  label?: string;
  rowsNumber?: number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

export const Input = ({
  id,
  value,
  onChange,
  onClick,
  onBlur,
  onKeyDown,
  iconType = '',
  name = '',
  label = '',
  type = 'text',
  placeholder = '',
  disabled = false,
  required = false,
  error = false
}: InputProps) => {
  return (
    <InputWrapper $error={error}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <div className="field__wrapper">
        <InputStyle
          id={id}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          required={required}
          $iconType={iconType}
          $error={error}
        />
        <span className="scaled__field" />
        {iconType && <InputIcon>{renderIcon(iconType)}</InputIcon>}
      </div>
    </InputWrapper>
  );
};
