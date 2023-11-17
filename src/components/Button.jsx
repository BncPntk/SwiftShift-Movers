export default function Button({
  children,
  customClasses = "bg-violet-900 hover:bg-violet-800",
}) {
  return (
    <button
      className={`mx-4 w-[140px] rounded-md  py-3 text-lg font-bold text-white  md:w-[180px] ${customClasses}`}
    >
      {children}
    </button>
  );
}
