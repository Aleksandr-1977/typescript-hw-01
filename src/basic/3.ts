// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну,
// яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).
let numberString: string | number;
let enableDisable: 'enable' | 'disable';
numberString = 5;
enableDisable = 'enable';
console.log('task basic-3:', numberString, enableDisable);
