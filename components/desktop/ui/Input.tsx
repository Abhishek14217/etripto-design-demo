type InputProps = {
  inputType: string;
  name: string;
  placeholder?: string;
  id?: string;
  value?: string;
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  inputType,
  placeholder,
  name,
  className,
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <input
      className={`${className} text-fontDesk outline-none`}
      type={inputType}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Input;
