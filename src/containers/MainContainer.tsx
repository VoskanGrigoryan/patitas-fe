"use client";

import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useStore } from "../../app/store/useStore";
import AdoptionFilterForm from "../components/forms/AdoptionFilterForm";
import CustomButton from "../components/reusable/Button";

interface ContainerProps {
  children: ReactNode;
  showAside?: boolean;
}

const links = [
  { link: "/", label: "Inicio" },
  { link: "/adopciones", label: "Adopciones" },
  { link: "/contacto", label: "Contacto" },
  { link: "/denuncias", label: "Denuncias" },
];

const MainContainer = ({ children, showAside = false }: ContainerProps) => {
  const { path, setPath } = useStore((state) => state);
  const [opened, { toggle, close }] = useDisclosure();
  const [active, setActive] = useState(links[0].link);
  const router = useRouter();

  useEffect(() => {
    setActive(path);
  }, [path]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      data-active={active === link.link || undefined}
      onClick={(e) => {
        e.preventDefault();
        setActive(link.link);
        setPath(link.link);
        close();

        if (link.link === path) {
          router.refresh();
        } else {
          router.push(link.link);
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "md", // This is where it starts collapsing on smaller screens
        collapsed: { mobile: !opened, desktop: true },
      }}
      aside={{
        width: 400, // Set the width of the aside
        breakpoint: "lg", // Ensure it's visible on large screens
        collapsed: { mobile: true, desktop: false }, // Collapse on mobile
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group gap={12} visibleFrom="sm">
          {items}
        </Group>

        <Group hiddenFrom="xs">
          <CustomButton variant="default">Iniciar Sesión</CustomButton>
        </Group>
      </AppShell.Header>

      {showAside && (
        <AppShell.Aside p="md">
          <AdoptionFilterForm />
        </AppShell.Aside>
      )}

      <AppShell.Navbar p="md">
        {items}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default MainContainer;
