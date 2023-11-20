export default function Button({
  children,
  customClasses = "bg-violet-900 hover:bg-violet-800",
  customSize = "mx-4 w-[140px] md:w-[180px] ",
  customPadding = "py-3",
}) {
  return (
    <button
      className={` rounded-md text-lg font-bold text-white  ${customClasses} ${customPadding} ${customSize}`}
    >
      {children}
    </button>
  );
}
