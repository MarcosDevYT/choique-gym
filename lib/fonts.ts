import { Anton, Archivo } from "next/font/google";

/**
 * Anton para los titulares: condensada, pesadísima y de una sola caja. En
 * mayúscula y a tamaño grande ocupa el ancho como un cartel — el registro
 * físico que pide un gimnasio. Es la diferencia entre un titular que se lee
 * y uno que golpea.
 *
 * Archivo para todo lo demás: grotesca neutra que aguanta bien los textos
 * chicos en mayúscula de las etiquetas y metadatos.
 */
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});
