type User = {
  name: string;
  age: number;
};
function isAdult(user: User): boolean {
  return user.age >= 18;
}
const justine: User = {
  name: 'Justine',
  age: 34,
};
const isJustineAnAdult: boolean = isAdult(justine);