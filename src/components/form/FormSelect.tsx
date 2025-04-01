interface FormSelectProps {
    name: string;
    id: string;
    required: boolean;
    onChange: any;
    value: string;
    children: React.ReactNode;
}

export function FormSelect(props: FormSelectProps) {
    return (
        <select name={props.name} id={props.id} required={props.required} onChange={props.onChange} value={props.value}>
            {props.children}
        </select>
    );
}
