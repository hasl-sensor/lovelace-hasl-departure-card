export const leftPad = (s: string, width: number, char: string) => {
    if (!char) return s
    if (s.length >= width) return s

    const padding = new Array(width - s.length + 1).join(char);
    return padding + s;
}

export const diffMinutes = (from: Date, to: Date) => {
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60)
    return diffMinutes
}