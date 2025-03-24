"use client";

import React, { forwardRef, useEffect } from "react";
import { Button as AntdButton, ButtonProps } from "antd";

interface CustomButtonProps extends Omit<ButtonProps, "color"> {
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ children, className, ...props }, ref) => {

        return (
            <AntdButton
                ref={ref}
                {...props}
                className={className}
            >
                {children}
            </AntdButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
