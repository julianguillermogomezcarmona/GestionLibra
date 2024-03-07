type InputProps = {
  label: string;
  placeholder: string;
  icon: any;
  type: string;
  className?: string;
  from: string;
  id: string;
};

export default function inputs({
  label,
  placeholder,
  icon,
  type,
  className,
  from,
  id,
}: InputProps) {
  return (
    <div className={`lex w-full flex-col ${className} text-black`}>
      <label htmlFor={from} className="text-[14px] font-semibold">
        {label}
      </label>
      <div className=" flex w-full border-2 border-black gap-[4px] px-[10px] py-[5px] items-center  rounded-[5px] justify-start">
        {icon}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="text-[14px] outline-none"
        />
      </div>
    </div>
  );
}
