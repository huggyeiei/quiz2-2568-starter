import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({year ,fullName, studentId ,courseName}:FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        ©  {fullName} {studentId} {courseName} {year} All rights reserved.
      </Text>
    </Group>
  );
}
