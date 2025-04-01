interface CardContentProps {
    label: string;
    value: string | number;
}

export function CardContent(props: CardContentProps) {
    return (
        <p>
            <span>{`${props.label} : `}</span>
            {props.value}
        </p>
    );
}
