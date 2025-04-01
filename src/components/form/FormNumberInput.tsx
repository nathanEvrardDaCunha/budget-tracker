interface FormNumberInputProps {
    name: string;
    id: string;
    placeholder: string;
    required: boolean;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: any;
}

export function FormNumberInput(props: FormNumberInputProps) {
    return (
        <input
            name={props.name}
            id={props.id}
            required={props.required}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
        ></input>
    );
}
