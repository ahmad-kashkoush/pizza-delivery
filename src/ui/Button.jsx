import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to, classes = '' }) {
  const baseStyle = `rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed md:px-6 md:py-4 ${classes}`;

  if (to)
    return (
      <Link to={to} className="baseStyle">
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={baseStyle}>
      {children}
    </button>
  );
}
export default Button;
