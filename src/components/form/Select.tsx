import { ChangeEventHandler } from 'react';

type Option = {
    value: string;
    name: string;
    key: number;
};

interface SelectProps {
    name: string;
    id: string;
    required: boolean;
    options: Array<Option>;
    onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}

export function Select(props: SelectProps) {
    return (
        <select name={props.name} id={props.id} required={props.required} onChange={props.onChange}>
            {props.options.length >= 2
                ? props.options.map((option) => {
                      return (
                          <option key={option.key} value={option.value}>
                              {option.name}
                          </option>
                      );
                  })
                : null}
        </select>
    );
}
