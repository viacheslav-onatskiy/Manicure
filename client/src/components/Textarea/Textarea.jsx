import { renderIcon } from '../../images/svgIcons';
import { TextareaIcon, TextareaLabel, TextareaStyle, TextareaWrapper } from './styles';

export const Textarea = ({
  id,
  value,
  onChange = undefined,
  onClick = undefined,
  onBlur = undefined,
  onKeyDown = undefined,
  iconType = '',
  label = '',
  rowsNumber = 3,
  type = 'text',
  placeholder = '',
  disabled = false
}) => {
  return (
    <TextareaWrapper>
      {label && <TextareaLabel htmlFor={id}>{label}</TextareaLabel>}
      <div className="field__wrapper">
        <TextareaStyle
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          rows={rowsNumber}
          iconType={iconType}
        />
        <span className="scaled__field" />
        {iconType && <TextareaIcon>{renderIcon(iconType)}</TextareaIcon>}
      </div>
    </TextareaWrapper>
  );
};
