import { SelectButtonOptionProp } from '.'

interface SelectItemProp {
  option: SelectButtonOptionProp;
  selected?: boolean;
  onSelect: (option: SelectButtonOptionProp) => void
}

export function SelectItem({ option, selected, onSelect }: SelectItemProp) {
  return (
    <button
      className={`select-button__select-item ${!!selected && '--selected'}`}
      onClick={() => onSelect(option)}
    >
      {option.label}
    </button>
  )
}