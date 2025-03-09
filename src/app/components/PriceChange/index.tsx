import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

export default function PriceChange({ value }: { value: number }) {
  const valueType: boolean = value >= 0;
  return (
    <div
      className={`w-20 flex items-center ${
        valueType ? "text-teal-400" : "text-red-500"
      }`}
    >
      {valueType ? (
        <MdArrowDropUp className="fill-teal-400 h-[20px] w-[20px]" />
      ) : (
        <MdArrowDropDown className="fill-red-500 h-[20px] w-[20px]" />
      )}
      {value}%
    </div>
  );
}
