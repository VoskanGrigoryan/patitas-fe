"use client";

import CustomButton from "@/src/components/reusable/Button";
import {
  Badge,
  Flex,
  Grid,
  Image,
  Paper,
  Rating,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconGenderFemale, IconPawFilled } from "@tabler/icons-react";
import NextImage from "next/image";
import tormenta from "../../public/tormenta1.png";
import styles from "./Styles.module.css";

const AdoptionCard = () => {
  return (
    <Paper
      withBorder
      shadow="lg"
      p={"xs"}
      className={styles.card}
      style={{ overflow: "hidden" }}
    >
      <Grid>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 4, xl: 5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
          }}
        >
          <Image
            className={styles.cardImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            component={NextImage}
            src={tormenta}
            alt="imagen"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 5, lg: 5, xl: 7 }}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Flex gap="sm" align="flex-start" direction="column" wrap="wrap">
                <Text size="xl" fw={700} c="violet">
                  Tormenta
                </Text>

                <Flex align="center" gap="sm">
                  <Text c="pink">Hembra</Text>
                  <ThemeIcon
                    color="pink"
                    size={20}
                    radius="xl"
                    style={{ marginLeft: 12 }}
                  >
                    <IconGenderFemale style={{ height: 16 }} />
                  </ThemeIcon>
                </Flex>

                <div className={styles.centerWithFlex}>
                  <Text size="md" fw={400}>
                    Tamaño
                  </Text>
                  <Rating
                    style={{ marginLeft: 12, marginTop: 4 }}
                    defaultValue={4}
                    readOnly
                    emptySymbol={<IconPawFilled color="gray" size="1rem" />}
                    fullSymbol={<IconPawFilled color="#7b2eda" size="1rem" />}
                  />
                </div>

                <Flex direction="column" gap="xs">
                  <Text size="md" fw={400}>
                    Personalidad
                  </Text>
                  <Badge color="violet" size="xs">
                    Cariñosa
                  </Badge>
                </Flex>
              </Flex>
            </Grid.Col>

            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Flex gap="sm" align="flex-start" direction="column" wrap="wrap">
                <Text>Peso 5kg</Text>

                <Text>Edad 1.2 años</Text>

                <Text>Refugio Patitas</Text>

                <Text>Ubicacion CABA</Text>

                <div>
                  <CustomButton size="compact-sm">
                    Preguntá por mi!
                  </CustomButton>
                </div>
              </Flex>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default AdoptionCard;
