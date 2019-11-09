import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Editor, EditorState } from "draft-js";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 54px;
`;

function App() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Container>
      <h1>This is a heading</h1>
      <Editor editorState={editorState} onChange={setEditorState} />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
