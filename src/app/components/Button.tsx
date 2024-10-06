import Link from "next/link";

type ButtonPrimaryProps = {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
};

const ButtonPrimary = ({
  href = "",
  target = "_self",
  label,
  icon,
  classes,
}: ButtonPrimaryProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
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
      <button className={"btn btn-primary " + classes}>
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

type ButtonOutlineProps = {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
};

const ButtonOutline = ({
  href = "",
  target = "_self",
  label,
  icon,
  classes,
}: ButtonOutlineProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
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
      <button className={"btn btn-outline " + classes}>
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

export { ButtonPrimary, ButtonOutline };
