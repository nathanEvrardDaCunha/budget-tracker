interface LabelProps {
    for: string;
    message: string;
}

export function Label(props: LabelProps) {
    return <label htmlFor={props.for}>{props.message}</label>;
}
