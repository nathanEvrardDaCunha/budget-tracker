interface BaseInput {
    name: string;
    id: string;
    required: boolean;
    placeholder: string;
    onChange: any;
}

interface InputText extends BaseInput {
    type: 'text';
    value: string;
}

interface InputNumber extends BaseInput {
    type: 'number';
    value: number;
    min: number;
    max: number;
    step: number;
}

type InputProps = InputText | InputNumber;

function Input(props: InputProps) {
    if (props.type === 'number') {
        return (
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                required={props.required}
                placeholder={props.placeholder}
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                onChange={props.onChange}
            ></input>
        );
    }

    if (props.type === 'text') {
        return (
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                required={props.required}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            ></input>
        );
    }
}

export { Input };
