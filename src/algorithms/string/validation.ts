// validates us telephone numbers
export function isValidUSPhoneNumber(str: string) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str);
}

// email validation checked
export function isEmailValid(str: string): boolean {
    const regex = /^[\w.]+@[0-9a-zA-Z_]+?\.[a-zA-Z]{2,3}\.?\w+?$/;
    return regex.test(str);
}
