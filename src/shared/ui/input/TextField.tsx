"use client"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="block text-sm font-medium leading-6 text-white">
        {label}
      </label>
      <input
        className="block w-full rounded-md bg-light-black border-0 py-3 px-2 text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chinese-green sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  )
}

export default TextField;
