import styled, { css } from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  min-width: 100px;
  max-width: 250px;

  &.header-language {
    .dropdown-header {
      padding: 5px;
    }
  }
`;

interface DropdownHeaderProps {
  $isOpen: boolean;
}

// export const DropdownHeader: IStyledComponent<'div', any, DropdownHeaderProps, never> = styled.div<DropdownHeaderProps>`
export const DropdownHeader = styled.div<DropdownHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: ${({ $isOpen }) => ($isOpen ? '8px 8px 0 0' : '8px')};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.dark2};

    .dropdown-icon {
      border-color: ${({ theme }) => theme.colors.primary2} transparent transparent
        transparent;
    }
  }
`;

export const DropdownIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  border-style: solid;
  border-width: 10px 6px 0;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.colors.primary1} transparent transparent
    transparent;
`;

const scrollBar = css`
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.dark} red;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dark2};
    border-radius: 15px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  border-top: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.white};

  ${scrollBar}
`;

interface DropdownItemProps {
  $isSelected: boolean | null;
}

// export const DropdownItem = styled.li<DropdownItemProps>`
export const DropdownItem = styled.li.attrs<DropdownItemProps>((props) => ({
  $isSelected: props.$isSelected ?? false
}))`
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark1};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.primary5};
      color: ${({ theme }) => theme.colors.white};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary5};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.white};
  }
`;
