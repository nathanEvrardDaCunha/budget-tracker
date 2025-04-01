interface FormLegendProps {
    legend: string;
}

export function FormLegend(props: FormLegendProps) {
    return <legend>{props.legend}</legend>;
}
