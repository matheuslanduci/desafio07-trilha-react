export function delay(ms: number) {
  return new Promise(resolver => setTimeout(resolver, ms));
}
