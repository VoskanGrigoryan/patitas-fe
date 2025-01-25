import React from "react";
import { Button, ButtonProps } from "@mantine/core";

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customProp,
  ...props
}) => {
  return (
    <Button
      {...props}
      radius="sm"
      variant="filled"
      color="violet"
      size="sm"
      fullWidth
    >
      {customProp && <span>{customProp}</span>}
      {props.children}
    </Button>
  );
};

export default CustomButton;
