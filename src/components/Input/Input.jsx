import { renderIcon } from '../../images/svgIcons';
import { InputIcon, InputLabel, InputStyle, InputWrapper } from './styles';

export const Input = ({
  id,
  value,
  onChange = undefined,
  onClick = undefined,
  onBlur = undefined,
  onKeyDown = undefined,
  iconType = '',
  name = '',
  label = '',
  type = 'text',
  placeholder = '',
  disabled = false,
  required = false,
  error = ''
}) => {
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
