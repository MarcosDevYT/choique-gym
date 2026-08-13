/** Parte "texto con *acento*" en tramos marcados, para resaltar en lima. */
export function parseAccent(text: string) {
  return text
    .split(/\*([^*]+)\*/g)
    .map((part, i) => ({ text: part, accent: i % 2 === 1 }))
    .filter((p) => p.text.length > 0);
}
