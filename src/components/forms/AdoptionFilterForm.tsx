import {
  Center,
  SegmentedControl,
  Select,
  Stack,
} from "@mantine/core";
import { IconGenderFemale, IconGenderMale } from "@tabler/icons-react";
import CustomButton from "../reusable/Button";
import { Controller, FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { petFilterSchema } from "@/src/schemas/petFilterSchema";
import React from "react";

type FormControllerProps = {
  control: any;
  name: string;
  renderComponent: React.ReactElement<{
    onChange: (value: any) => void;
    value: any;
    onBlur: () => void;
    ref?: React.Ref<any>;
    disabled?: boolean;
    label?: string;
  }>;
  label?: string;
  [key: string]: any;
};

const FormController = ({
  control,
  name,
  renderComponent,
  label,
  ...rest
}: FormControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur, ref, disabled } }) =>
        React.cloneElement(renderComponent, {
          onChange,
          value,
          onBlur,
          ref,
          disabled,
          label,
          ...rest,
        })
      }
    />
  );
};

const AdoptionFilterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<any>({
    resolver: zodResolver(petFilterSchema),
    defaultValues: {
      animal: "perro",
      gender: "macho",
      age: "",
      location: "caba",
      adoptionFrom: "",
    },
  });

  const gender = watch("gender");

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Stack gap="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          control={control}
          name="animal"
          renderComponent={
            <SegmentedControl
              id="animal"
              fullWidth
              size="sm"
              radius="md"
              color="violet"
              data={[
                { value: "perro", label: "Perro" },
                { value: "gato", label: "Gato" },
                { value: "otro", label: "Otro" },
              ]}
              style={{ marginBottom: 12 }}
            />
          }
        />

        {/* {errors.animal && <span>{(errors.animal as FieldError)?.message}</span>} */}

        <FormController
          control={control}
          name="gender"
          label="Sexo del animal"
          renderComponent={
            <SegmentedControl
              id="gender"
              fullWidth
              size="sm"
              radius="md"
              color={gender === "hembra" ? "pink" : "blue"}
              data={[
                {
                  value: "macho",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconGenderMale style={{ width: 16, height: 16 }} />
                      <span>Macho</span>
                    </Center>
                  ),
                },
                {
                  value: "hembra",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconGenderFemale style={{ width: 16, height: 16 }} />
                      <span>Hembra</span>
                    </Center>
                  ),
                },
              ]}
              style={{ marginBottom: 8 }}
            />
          }
        />

        <FormController
          control={control}
          name="age"
          label="Rango de edad"
          renderComponent={
            <Select
              placeholder="Edad"
              defaultValue=""
              error={(errors.age as FieldError)?.message}
              data={[
                { value: "cachorro", label: "Cachorro" },
                { value: "joven", label: "Joven" },
                { value: "adulto", label: "Adulto" },
                { value: "abuelo", label: "Abuelo" },
              ]}
            />
          }
        />

        <FormController
          control={control}
          name="location"
          label="Donde buscas adoptar"
          renderComponent={
            <Select
              id="location"
              label="Provincia"
              placeholder="CABA"
              defaultValue="caba"
              error={(errors.location as FieldError)?.message}
              data={[
                { value: "caba", label: "CABA" },
                { value: "buenosaires", label: "Buenos Aires" },
              ]}
              style={{ marginBottom: 4 }}
            />
          }
        />

        <FormController
          control={control}
          name="adoptionFrom"
          label="De quien vas a adoptar"
          renderComponent={
            <Select
              id="adoptionFrom"
              label="Centro de adopción"
              placeholder="Patitas en accion"
              defaultValue=""
              error={(errors.adoptionFrom as FieldError)?.message}
              data={[
                { value: "hogarLourdes", label: "Centro de adopción Lourdes" },
                { value: "particular", label: "Particular" },
              ]}
              style={{ marginBottom: 12 }}
            />
          }
        />

        <CustomButton type="submit">Buscar</CustomButton>
      </form>
    </Stack>
  );
};

export default AdoptionFilterForm;
