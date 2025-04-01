interface FormProps {
    handleAction: any;
    children: React.ReactNode;
}

export function Form(props: FormProps) {
    return <form action={props.handleAction}>{props.children}</form>;
}
