"use client";

import React, { forwardRef } from "react";
import { Button as AntdButton, ButtonProps } from "antd";

interface CustomButtonProps extends Omit<ButtonProps, "color"> {
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
}

const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ bgColor, textColor, borderColor, children, style, ...props }, ref) => {
        return (
            <AntdButton
                ref={ref}
                style={{
                    backgroundColor: bgColor || "inherit",
                    color: textColor || "inherit",
                    borderColor: borderColor || bgColor || "inherit",
                }}
                {...props}
                className={style}
            >
                {children}
            </AntdButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
