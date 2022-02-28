import React, { ButtonHTMLAttributes } from 'react'

interface Props 
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "htmlType"> {
  id?: string;
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  htmlType?: "reset" | "submit";
  onClick?: () => void;
  size?: "small" | "large";
  icon?: React.ReactNode;
  type?: "danger" | "success" | "outlined" | "text" | "primary" | "secondary";
  vCenter?: boolean;
  isSubmit?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  className,
  size = 'large',
  type = 'primary',
  vCenter,
  children,
  disabled,
  isSubmit,
  isLoading = false,
  ...buttonProps
}: Props) => {
  return (
    <button {...buttonProps} disabled={Boolean(disabled)} type={isSubmit ? 'submit' : 'button'}>
        {children}
    </button>
  )
}

export default Button;