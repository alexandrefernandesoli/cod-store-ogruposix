import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-blue-500 hover:bg-blue-400 transition duration-300 text-white font-bold py-2 px-4 rounded-lg w-full",
        props.className,
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      )}
    >
      {children}
    </button>
  );
}
