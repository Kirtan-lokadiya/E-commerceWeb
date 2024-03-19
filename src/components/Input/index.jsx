import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  underline: {
    blue_gray_100: "border-b border-blue_gray-100 text-black-900_02",
  },
  fill: { white_A700: "bg-white-A700" },
};
const shapes = { round: "rounded-md" };
const sizes = {
  xs: "pb-[22px] pl-3 pt-[13px]",
  lg: "pb-[17px] pl-3 pr-[17px] pt-[18px]",
  "2xl": "pb-[33px]",
  sm: "pb-[13px] pr-[13px] pt-3.5",
  xl: "pb-8 sm:pr-5 pr-[31px] pt-[31px]",
  md: "pb-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "lg",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "lg", "2xl", "sm", "xl", "md"]),
  variant: PropTypes.oneOf(["underline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_100", "white_A700"]),
};

export { Input };
