interface FormButtonProps {
    type: 'submit' | 'reset';
    message: string;
    onClick?: any;
}

export function FormButton(props: FormButtonProps) {
    return (
        <button type={props.type} onClick={props.onClick}>
            {props.message}
        </button>
    );
}
