interface InputBaseProps {
    name: string;
    id: string;
    placeholder: string;
    required: boolean;
}

interface InputTextualProps extends InputBaseProps {
    type: 'text';
}

interface InputNumericalProps extends InputBaseProps {
    type: 'number';
    min: number;
    step: number;
    max: number;
}

type InputProps = InputTextualProps | InputNumericalProps;

export function Input(props: InputProps) {
    if (props.type === 'number') {
        return (
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                required={props.required}
                min={props.min}
                max={props.max}
                step={props.step}
            ></input>
        );
    }

    return (
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            required={props.required}
        ></input>
    );
}
