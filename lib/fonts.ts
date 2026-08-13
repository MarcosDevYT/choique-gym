import { Archivo, Archivo_Black } from "next/font/google";

/**
 * Archivo para todo el cuerpo y Archivo Black para los titulares.
 *
 * Archivo es una grotesca de origen editorial: tiene carácter sin caer en la
 * tipografía "deportiva" genérica. Archivo Black es su corte display, con el
 * peso justo para que los titulares en mayúscula tengan presencia física —
 * el registro que pide un gimnasio.
 */
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});
