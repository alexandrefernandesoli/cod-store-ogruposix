import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, name, type, error, ...rest }, ref) => {
    return (
      <div className="mb-2">
        <label
          htmlFor={id || name}
          className={twMerge("font-medium", error ? "text-red-500" : "")}
        >
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          id={id || name}
          name={name}
          type={type}
          className={twMerge(
            "px-3 py-2 border-gray-200 border rounded w-full",
            error ? "border-red-500" : ""
          )}
        />
        {error ? (
          <span className="text-red-500 text-xs">{error.message}</span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
