"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Contact.module.css";

const Contact = () => {
  const [status, setStatus] = useState<"pending" | "ok" | "error" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    initialValues: { name: "", email: "", subject: "", message: "" },
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      const formData = new FormData(event.currentTarget);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) setStatus("ok");
      else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(String(e));
    }
  };

  return (
    <Box className={classes.contactContainer}>
      <form className={classes.form} onSubmit={handleFormSubmit} name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <Title order={2} className={classes.title}>
          Get In Touch
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>
        <TextInput
          label="Subject"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
          mt="md"
        />
        <Textarea
          label="Message"
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
          mt="md"
        />
        <Group justify="center" mt="xl">
          <Button
            variant="outline"
            size="xl"
            className={classes.formButton}
            disabled={status === "pending"}
            type="submit"
          >
            {status === "pending" ? "Submitting..." : "Send Message"}
          </Button>
        </Group>
        {status === "ok" && <p className={classes.success}>Message sent!</p>}
        {status === "error" && <p className={classes.error}>Error: {error}</p>}
      </form>
    </Box>
  );
};

export default Contact;
