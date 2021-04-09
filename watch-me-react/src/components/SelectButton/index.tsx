import { useState, useCallback } from 'react';
import { SelectItem } from './SelectItem'

import './styles.scss'

export interface SelectButtonOptionProp {
  value: string;
  label: string;
}

export interface SelectButtonProp {
  options: SelectButtonOptionProp[]
}

export function SelectButton({ options }:SelectButtonProp) {
  const [selected, setSelectd] = useState<SelectButtonOptionProp | null>(null);
  
  const isSelected = useCallback(
    (option: SelectButtonOptionProp, index: number) :boolean => {
      return (selected === null && index === 0) || (option.value === selected?.value)
    }, [selected])

  return (
    <div className="select-button">
      {options.map((option, index) => (
        <SelectItem
          option={option}
          selected={isSelected(option, index)}
          onSelect={(data: SelectButtonOptionProp) => setSelectd(data)}
        />
      ))}
    </div>
  )
}