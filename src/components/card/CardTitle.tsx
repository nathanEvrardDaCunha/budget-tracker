interface CardTitleProps {
    content: string;
}

export function CardTitle(props: CardTitleProps) {
    return <h4>{props.content}</h4>;
}
