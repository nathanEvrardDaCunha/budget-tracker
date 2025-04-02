interface FormProps {
    action: any;
    children: React.ReactNode;
}

function Form(props: FormProps) {
    return <form action={props.action}>{props.children}</form>;
}

export { Form };
