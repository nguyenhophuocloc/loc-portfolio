type Props = {
  name: string;
  isActive: boolean;
  value: number;
  handleSelected: (value: number) => void;
};
const FilterBtn = ({ name, value, isActive, handleSelected }: Props) => {
  return (
    <span
      className={
        "h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg w-fit hover:cursor-pointer " +
        `${isActive ? "active-filter" : ""}`
      }
      onClick={() => handleSelected(value)}
    >
      {name}
    </span>
  );
};

export default FilterBtn;
