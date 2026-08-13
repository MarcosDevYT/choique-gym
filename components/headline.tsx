import { Fragment } from "react";
import { parseAccent } from "@/lib/utils";

/** Titular con marcado propio: *palabra* pasa a lima. Respeta los saltos de línea. */
export function Headline({ text, className = "" }: { text: string; className?: string }) {
  const lines = text.split("\n");
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {parseAccent(line).map((part, i) =>
            part.accent ? (
              <span key={i} className="text-lime">
                {part.text}
              </span>
            ) : (
              <Fragment key={i}>{part.text}</Fragment>
            )
          )}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </span>
  );
}
