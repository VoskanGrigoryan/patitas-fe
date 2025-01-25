"use client";

import MainContainer from "@/src/containers/MainContainer";
import AdoptionCard from "./AdoptionCard";
import { ActionIcon, Drawer, Grid } from "@mantine/core";
import useWindowWidth from "@/src/hooks/useWidth";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import styles from "./Styles.module.css";
import AdoptionFilterForm from "@/src/components/forms/AdoptionFilterForm";

const breakpoint = 1300;

const Adopciones = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const width = useWindowWidth();

  return (
    <MainContainer showAside={true}>
      {width < breakpoint ? (
        <ActionIcon
          variant="filled"
          size="lg"
          onClick={open}
          color="violet"
          className={styles.mobileFilterButton}
        >
          <IconFilter style={{ width: "75%", height: "75%" }} stroke={2} />
        </ActionIcon>
      ) : null}

      <Grid gutter="none">
        {Array(8)
          .fill(null)
          .map((num, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}
            >
              <AdoptionCard />
            </Grid.Col>
          ))}
      </Grid>

      <Drawer opened={opened} onClose={close} zIndex={3000}>
        <AdoptionFilterForm />
      </Drawer>
    </MainContainer>
  );
};

export default Adopciones;
