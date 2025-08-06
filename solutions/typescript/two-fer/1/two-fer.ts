export function twoFer(name?: string): string {
  let otherPerson: string;

  if (!name) {
    otherPerson = 'you';
  } else {
    otherPerson = name;
  }

  return `One for ${otherPerson}, one for me.`;
}