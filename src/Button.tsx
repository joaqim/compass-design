import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonVariants = 'default' | 'warning';

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className: `px-8 py-2 font-semibold ${
      variant === 'default' ? 'text-white' : 'text-red-700'
    } transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
  })
)<{ variant: ButtonVariants }>``;

export interface ButtonProps {
  // extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (e?: React.MouseEvent) => void;
  variant?: 'default' | 'warning';
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  onClick = () => null,
}) => (
  <StyledButton variant={variant} onClick={onClick}>
    {text}
  </StyledButton>
);
