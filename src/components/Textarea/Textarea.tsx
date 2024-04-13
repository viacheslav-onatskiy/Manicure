import { ChangeEvent } from 'react';
import { IconType, renderIcon } from '../../images/svgIcons';
import { TextareaIcon, TextareaLabel, TextareaStyle, TextareaWrapper } from './styles';

interface TextareaProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  name?: string;
  iconType?: IconType;
  label?: string;
  rowsNumber?: number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

export const Textarea = ({
  id,
  value,
  onChange,
  onClick,
  onBlur,
  onKeyDown,
  iconType = '',
  label = '',
  rowsNumber = 3,
  type = 'text',
  placeholder = '',
  name = '',
  disabled = false,
  required = false,
  error = false
}: TextareaProps) => {
  return (
    <TextareaWrapper $error={error}>
      {label && <TextareaLabel htmlFor={id}>{label}</TextareaLabel>}
      <div className="field__wrapper">
        <TextareaStyle
          id={id}
          value={value}
          // type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          rows={rowsNumber}
          $required={required}
          $iconType={iconType}
          $error={error}
        />
        <span className="scaled__field" />
        {iconType && <TextareaIcon>{renderIcon(iconType)}</TextareaIcon>}
      </div>
    </TextareaWrapper>
  );
};
