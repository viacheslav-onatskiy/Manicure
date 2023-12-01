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
  disabled = false
}) => {
  return (
    <InputWrapper>
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
          iconType={iconType}
        />
        <span className="scaled__field" />
        {iconType && <InputIcon>{renderIcon(iconType)}</InputIcon>}
      </div>
    </InputWrapper>
  );
};
