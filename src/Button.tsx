import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonVariants = 'default' | 'warning';

const StyledButton = styled.button.attrs(() => ({
  className: `px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
}))<{ variant: ButtonVariants }>`
  color: ${({ variant }) => (variant === 'warning' ? 'red' : '')};
`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'default' | 'warning';
}

export const Button: FC<ButtonProps> = ({ text, variant = 'default' }) => (
  <StyledButton variant={variant}>{text}</StyledButton>
);
