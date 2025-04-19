const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback: (data: any) => number = data => {
  return 100 + data.a;
};
console.log('task basic-1:', age, username, toggle, empty);
