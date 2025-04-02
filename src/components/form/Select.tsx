interface SelectProps {
    name: string;
    id: string;
    required: boolean;
    onChange: any;
    value: string;
    children: React.ReactNode;
}

function Select(props: SelectProps) {
    return (
        <select name={props.name} id={props.id} required={props.required} onChange={props.onChange} value={props.value}>
            {props.children}
        </select>
    );
}

export { Select };
