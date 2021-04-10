import { useState, useCallback } from 'react';
import { SelectItem } from './SelectItem'

import './styles.scss'

export interface SelectGenresOptionProp {
  id: number;
  name: string;
  title: string;
}

export interface SelectGenresProp {
  options: SelectGenresOptionProp[]
  onChange?: (option: SelectGenresOptionProp) => void
}

export function SelectGenres({ options, onChange }:SelectGenresProp) {
  const [selected, setSelected] = useState<SelectGenresOptionProp | null>(null);
  
  const isSelected = useCallback(
    (option: SelectGenresOptionProp, index: number) :boolean => {
      return (selected === null && index === 0) || (option.id === selected?.id)
    }, [selected])

  return (
    <div className="select-genres">
      {options.map((option, index) => (
        <SelectItem
          key={option.id}
          option={option}
          selected={isSelected(option, index)}
          onSelect={(data: SelectGenresOptionProp) => {
            setSelected(data)
            onChange && onChange(data)
          }}
        />
      ))}
    </div>
  )
}