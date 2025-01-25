import { z } from "zod";

export const petFilterSchema = z.object({
  animal: z
    .string()
    .nonempty("Seleccioná el tipo de animal")
    .refine((value) => ["perro", "gato", "otro"].includes(value), {
      message: "El tipo de animal no es valido",
    }),
  gender: z
    .string()
    .nonempty("Seleccioná un genero")
    .refine((value) => ["macho", "hembra"].includes(value), {
      message: "El genero seleccionado no es valido",
    }),
  age: z
    .string()
    .refine(
      (value) =>
        value === "" ||
        ["cachorro", "joven", "adulto", "abuelo"].includes(value),
      {
        message: "Seleccioná un rango de edad válido o dejálo vacío",
      }
    ),
  location: z
    .string()
    .nonempty("Seleccioná una zona en la que recidís")
    .refine((value) => ["caba", "buenosaires"].includes(value), {
      message: "La zona no es válida",
    }),
  adoptionFrom: z
    .string()
    .refine(
      (value) => value === "" || ["hogarLourdes", "particular"].includes(value),
      {
        message: "Seleccioná un centro de adopción válido o dejálo vacío",
      }
    ),
});
