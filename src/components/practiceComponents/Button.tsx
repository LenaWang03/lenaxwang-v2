import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
