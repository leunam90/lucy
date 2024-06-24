function splitString(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /\b\S+\b/gu;

  let match;

  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default splitString;
