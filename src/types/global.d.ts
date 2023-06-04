declare module '*.css' {
    const content: CSSStyleSheet;
    export = content;
}

declare module '*.png' {
    const content: string;
    export = content;
}

declare module '*.svg' {
    const content: string;
    export = content;
}