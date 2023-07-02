import { Container, Textarea, Flex, Button } from "@mantine/core";
import { IconTrash, IconFileImport, IconFileExport } from "@tabler/icons-react";
import "./App.css";
import { useState } from "react";
import { render } from "@testing-library/react";

const TitleArea = (props) => {
  const handleTitleChange = (event) => {
    const value = event.target.value;
    props.handleTitleValueChange(value);
  };

  return <Textarea onChange={handleTitleChange} mt={"md"} mb={"md"} radius={"md"} placeholder="Title" />;
};

const ContentsArea = (props) => {
  const handleContentsChange = (event) => {
    const value = event.target.value;
    props.handleContentsValueChange(value);
  };

  return <Textarea onChange={handleContentsChange} mt={"md"} mb={"md"} radius={"md"} placeholder="Contents" autosize minRows={10} />;
};

function Control() {
  return (
    <>
      <Flex gap="md" justify="center" align="center">
        <Button leftIcon={<IconTrash />} color="red">
          Delete
        </Button>
        <Button leftIcon={<IconFileExport />}>Export</Button>
        <Button leftIcon={<IconFileImport />}>Import</Button>
      </Flex>
    </>
  );
}

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleValueChange = (value) => {
    setTitle(value);
  };

  const handleContentsValueChange = (value) => {
    setContents(value);
  };

  return (
    <>
      <TitleArea handleTitleValueChange={handleTitleValueChange} />
      <ContentsArea handleContentsValueChange={handleContentsValueChange} />
      <Control />
      <pre>{title}</pre>
      <pre>{contents}</pre>
    </>
  );
}

export default App;
