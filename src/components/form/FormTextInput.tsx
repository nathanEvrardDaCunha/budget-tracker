interface FormTextInputProps {
    name: string;
    id: string;
    placeholder: string;
    required: boolean;
    value: string;
    onChange: any;
}

export function FormTextInput(props: FormTextInputProps) {
    return (
        <input
            name={props.name}
            id={props.id}
            required={props.required}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        ></input>
    );
}
