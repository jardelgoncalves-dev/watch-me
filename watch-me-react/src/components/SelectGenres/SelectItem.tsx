import { SelectGenresOptionProp } from '.'

interface SelectItemProp {
  option: SelectGenresOptionProp;
  selected?: boolean;
  onSelect: (option: SelectGenresOptionProp) => void
}

export function SelectItem({ option, selected, onSelect }: SelectItemProp) {
  return (
    <button
      className={`select-genres__select-item ${!!selected && '--selected'}`}
      onClick={() => onSelect(option)}
    >
      {option.title}
    </button>
  )
}