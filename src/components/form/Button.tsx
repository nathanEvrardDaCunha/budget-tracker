interface ButtonProps {
    type: 'submit' | 'reset';
    message: string;
}

export function Button(props: ButtonProps) {
    return <button type={props.type}>{props.message}</button>;
}
