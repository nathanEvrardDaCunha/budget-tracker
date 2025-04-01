interface CardSectionProps {
    children: React.ReactNode;
}

export function CardSection(props: CardSectionProps) {
    return <section>{props.children}</section>;
}
