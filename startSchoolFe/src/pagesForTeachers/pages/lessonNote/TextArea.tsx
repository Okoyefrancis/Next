import { FC, TextareaHTMLAttributes } from "react";

interface iTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value?: string;
  placeholder?: string;
}

const TextArea: FC<iTextArea> = ({ label, value, placeholder, ...props }) => {
  return (
    <div>
      <div className="mb-1 text-[12px]">{label}</div>
      <textarea
        value={value}
        placeholder={placeholder}
        className="w-full col-span-1 bg-white border transition-all duration-300 focus:outline-1 focus:outline outline-blue-950 rounded-md p-3 "
        {...props}
      />
    </div>
  );
};

export default TextArea;
