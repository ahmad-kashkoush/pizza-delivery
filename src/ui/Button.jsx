import { Link } from 'react-router-dom';

function Button({
  children,
  disabled = false,
  to,
  className = '',
  type = 'primary',
}) {
  const base = `rounded-full bg-yellow-400  font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed  ${className}`;

  const styles = {
    primary: base + ' text-sm  px-4 py-3 md:px-6 md:py-4',
    small: base + ' text-xs py-2 px-4 md:px-5 md:py-3',
    secondary:
      'rounded-full border-2 px-3 py-1 text-sm font-semibold uppercase text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 md:px-5 md:py-3',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
