interface FormFieldsetProps {
    children: React.ReactNode;
}

export function FormFieldset(props: FormFieldsetProps) {
    return <fieldset>{props.children}</fieldset>;
}
