const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm text-gray-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-white outline-none focus:border-indigo-500 transition ${className}`}
      />
    </div>
  );
};

export default Input;