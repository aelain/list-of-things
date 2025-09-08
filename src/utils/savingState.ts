export function getThings(): string[] | null {
  try {
    return JSON.parse(localStorage['list-of-things']);
  } catch (_) {
    return null;
  }
}

export function saveThings(things: string[]) {
  localStorage['list-of-things'] = JSON.stringify(things);
}