import { InputLabel, InputStyle, InputWrapper } from './styles';

export const Input = ({
  id,
  value,
  onChange = undefined,
  onClick = undefined,
  onBlur = undefined,
  onKeyDown = undefined,
  label = '',
  type = 'text',
  placeholder = '',
  disabled = false
}) => {
  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputStyle
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </InputWrapper>
  );
};
