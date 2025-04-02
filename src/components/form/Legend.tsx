interface LegendProps {
    message: string;
}

function Legend(props: LegendProps) {
    return <legend>{props.message}</legend>;
}

export { Legend };
