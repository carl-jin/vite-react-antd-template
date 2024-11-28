import { useState } from "react";
import { Card, Typography } from "antd";

export default function EditorPage() {
  const [quillFull, setQuillFull] = useState("");

  return (
    <>
      <Card title="Editor Simple"></Card>
      <div className="h-10" />
      <Card title="Editor Full"></Card>
    </>
  );
}
