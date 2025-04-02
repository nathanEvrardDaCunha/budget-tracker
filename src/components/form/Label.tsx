interface LabelProps {
    htmlFor: string;
    message: string;
}

function Label(props: LabelProps) {
    return <label htmlFor={props.htmlFor}>{props.message}</label>;
}

export { Label };
