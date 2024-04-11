import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DropdownContainer,
  DropdownHeader,
  DropdownIcon,
  DropdownItem,
  DropdownList
} from './styles';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options?: Option[];
  onSelect?: (option: Option) => void;
  initialValue?: string;
  className?: string;
  label?: string;
  isVisibleHeader?: boolean;
}

const Select = ({
  options = [],
  onSelect = () => {},
  initialValue = '',
  className = '',
  label = 'Select an option',
  ...rest
}: SelectProps) => {
  const { isVisibleHeader } = rest;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialValue) {
      setSelectedOption(options.find((option) => option.value === initialValue) || null);
    }
  }, [initialValue, options]);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('click', checkIfClickedOutside, true);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside, true);
    };
  }, [closeDropdown]);

  useEffect(() => {
    if (!isVisibleHeader) {
      closeDropdown();
      return;
    }
  }, [isVisibleHeader, closeDropdown]);

  return (
    <DropdownContainer ref={dropdownRef} className={className}>
      <DropdownHeader
        onClick={handleToggleDropdown}
        $isOpen={isOpen}
        className="dropdown-header"
      >
        {selectedOption ? selectedOption.label : label}
        <DropdownIcon
          className="dropdown-icon"
          style={{ transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0)' }}
        />
      </DropdownHeader>

      {isOpen && isVisibleHeader && (
        <DropdownList className="scroll">
          {options.map((option, i) => (
            <DropdownItem
              key={`${option.value}-${i}`}
              onClick={() => handleSelectOption(option)}
              $isSelected={selectedOption && selectedOption.value === option.value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Select;
