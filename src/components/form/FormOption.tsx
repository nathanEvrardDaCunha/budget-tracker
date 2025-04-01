interface FormOption {
    value: string;
    name: string;
}

export function FormOption(props: FormOption) {
    return <option value={props.value}>{props.name}</option>;
}
