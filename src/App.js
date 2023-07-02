import React, { useState } from "react";
import { Textarea, Button, Flex, Container } from "@mantine/core";
import { IconTrash, IconFileImport, IconFileExport } from "@tabler/icons-react";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleDelete = () => {
    setTitle("");
    setContents("");
  };

  const handleExport = () => {
    const blob = new Blob([contents], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = title;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Container size="md">
        <Textarea value={title} onChange={(event) => setTitle(event.target.value)} mt={"md"} mb={"md"} radius={"md"} placeholder="Title" />
        <Textarea
          value={contents}
          onChange={(event) => setContents(event.target.value)}
          mt={"md"}
          mb={"md"}
          radius={"md"}
          placeholder="Contents"
          autosize
          minRows={10}
        />
      </Container>
      <Flex gap="md" justify="center" align="center">
        <Button onClick={handleDelete} leftIcon={<IconTrash />} color="red">
          Delete
        </Button>
        <Button onClick={handleExport} leftIcon={<IconFileExport />}>
          Export
        </Button>
        <Button leftIcon={<IconFileImport />}>Import</Button>
      </Flex>
      ;
    </>
  );
}

export default App;
