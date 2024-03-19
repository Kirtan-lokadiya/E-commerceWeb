import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-md",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    blue_50: "bg-blue-50 text-gray-900_01",
    green_600: "bg-green-600 text-gray-50",
    blue_gray_100: "bg-blue_gray-100 text-black-900_02",
  },
  outline: {
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_02",
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    blue_gray_100: "border border-blue_gray-100 border-solid",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[7px]",
  md: "pr-2 py-2",
  lg: "p-3",
  xl: "px-2.5 py-[15px]",
  "2xl": "p-[17px]",
  "3xl": "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "2xl",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "blue_A700",
    "white_A700_b2",
    "blue_50",
    "green_600",
    "blue_gray_100",
    "blue_gray_400",
    "blue_gray_100_01",
  ]),
};

export { Button };
