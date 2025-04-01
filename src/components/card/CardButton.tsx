interface CardButtonProps {
    type: 'delete' | 'display';
    onClick: any;
}

export function CardButton(props: CardButtonProps) {
    return <button onClick={props.onClick}>{props.type === 'delete' ? 'Delete' : 'Display'}</button>;
}
