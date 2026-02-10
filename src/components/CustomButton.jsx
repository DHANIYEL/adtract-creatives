import React from "react";

const VARIANTS = {
  primary:
    "bg-tertiary text-black border border-secondary hover:bg-tertiary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  light: "bg-light text-secondary hover:bg-light/80",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center 
        px-5 py-2
        text-sm font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary/40
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant]}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
