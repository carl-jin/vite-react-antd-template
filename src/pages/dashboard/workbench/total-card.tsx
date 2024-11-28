import Card from "@/components/card";
import { SvgIcon } from "@/components/icon";

type Props = {
  title: string;
  increase: boolean;
  percent: string;
  count: string;
  chartData: number[];
};
export default function TotalCard({ title, increase, count, percent }: Props) {
  return (
    <Card>
      <div className="flex-grow">
        <h6 className="text-sm font-medium">{title}</h6>
        <div className="mb-2 mt-4 flex flex-row">
          {increase ? (
            <SvgIcon icon="ic_rise" size={24} color="rgb(34, 197, 94)" />
          ) : (
            <SvgIcon icon="ic_decline" size={24} color="rgb(255, 86, 48)" />
          )}
          <div className="ml-2">
            <span>{increase ? "+" : "-"}</span>
            <span>{percent}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">{count}</h3>
      </div>
    </Card>
  );
}
