import Link from 'next/link';

type ButtonPrimaryProps = {
  href?: string;
  target?: string;
  label: string;
  icon?: React.ReactNode;
  classes?: string;
  onClick?: () => void;
};

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '',
  onClick,
}: ButtonPrimaryProps) => {
  const baseStyles = `
    group px-7 py-3 bg-white text-black font-bold rounded-full 
    hover:bg-blue-600 hover:text-white transition-all duration-300 
    flex items-center justify-center gap-2 shadow-lg shadow-white/5 
    active:scale-95 
    ${classes}
  `;

  const content = (
    <>
      {label}
      {icon && (
        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
};

export default ButtonPrimary;
type ButtonOutlineProps = {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
};

const ButtonOutline = ({
  href = '',
  target = '_self',
  label,
  icon,
  classes,
}: ButtonOutlineProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={'btn btn-outline ' + classes}
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </Link>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonOutline, ButtonPrimary };
