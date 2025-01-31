import { FC } from "react";


// type btn = { 
//     label: string;
//     onClick: () => void; 
//     disabled: boolean 
// };


interface btn {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button:FC<btn> = ({ label, onClick, disabled }: btn) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
