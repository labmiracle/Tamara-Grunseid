function padLeft(value: string, padding: number | string): string {
    switch (typeof(padding)) {
        case 'number':
            return `${Array(padding + 1).join(' ')}${value}`
            break;
            default:
                return padding + value
            break;
    }
 }
    
    console.log('[Ejercicio 4.2]', `
    ${padLeft('', 0)}
    ${padLeft('', '')}
    ${padLeft('', '')}
    ${padLeft('', '')}
    ${padLeft('', '')}
    `);
    