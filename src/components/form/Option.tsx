interface OptionProps {
    value: string;
    message: string;
}

function Option(props: OptionProps) {
    return <option value={props.value}>{props.message}</option>;
}

export { Option };
