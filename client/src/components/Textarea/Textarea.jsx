import { TextareaLabel, TextareaStyle, TextareaWrapper } from './styles';

export const Textarea = ({
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
    <TextareaWrapper>
      {label && <TextareaLabel htmlFor={id}>{label}</TextareaLabel>}
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
        rows={3}
      />
    </TextareaWrapper>
  );
};
