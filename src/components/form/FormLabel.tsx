interface FormLabelProps {
    for: string;
    message: string;
}

export function FormLabel(props: FormLabelProps) {
    return <label htmlFor={props.for}>{props.message}</label>;
}
