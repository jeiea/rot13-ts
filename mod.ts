export function encode(string: string): string {
  return string
    .replace(/[a-z]/g, rotateLower)
    .replace(/[A-Z]/g, rotateUpper)
    .replace(/[0-9]/g, (c) => {
      const zero = "0".charCodeAt(0);
      const num = c.charCodeAt(0) - zero;
      return String.fromCharCode(zero + ((num + 13) % 10));
    });
}

export function decode(string: string): string {
  return string
    .replace(/[a-z]/g, rotateLower)
    .replace(/[A-Z]/g, rotateUpper)
    .replace(/[0-9]/g, (c) => {
      const zero = "0".charCodeAt(0);
      const num = c.charCodeAt(0) - zero;
      return String.fromCharCode(zero + ((num + 7) % 10));
    });
}

function rotateLower(c: string) {
  return String.fromCharCode(c.charCodeAt(0) + (c < "n" ? 13 : -13));
}

function rotateUpper(c: string) {
  return String.fromCharCode(c.charCodeAt(0) + (c < "N" ? 13 : -13));
}
