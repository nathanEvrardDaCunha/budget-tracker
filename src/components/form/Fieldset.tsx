interface FieldsetProps {
    children: React.ReactNode;
}

function Fieldset(props: FieldsetProps) {
    return <fieldset>{props.children}</fieldset>;
}

export { Fieldset };
