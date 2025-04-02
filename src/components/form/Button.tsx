interface ButtonProps {
    type: 'submit' | 'reset';
    message: string;
    onClick?: any;
}

function Button(props: ButtonProps) {
    return (
        <button type={props.type} onClick={props.onClick}>
            {props.message}
        </button>
    );
}

export { Button };
