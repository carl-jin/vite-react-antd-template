import { Typography } from "antd";
import Card from "@/components/card";

export default function CurrentDownload() {
  return (
    <Card className="flex-col">
      <header className="self-start">
        <Typography.Title level={5}>Current Download</Typography.Title>
      </header>
      <main>
        <ChartDonut />
      </main>
    </Card>
  );
}

function ChartDonut() {
  return <div>empty</div>;
}
