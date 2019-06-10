// Basic Interface
interface LabeledValue {
    label: string;
}

//Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

//Readonly Properties
interface Point {
    readonly x: number;
    readonly y: number;
}
