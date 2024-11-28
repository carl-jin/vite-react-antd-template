import { useState } from "react";
import { CircleLoading } from "@/components/loading";

type Props = {
  src: string;
};
export default function Iframe({ src = "" }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-full w-full relative">
      {isLoading && <CircleLoading />}

      <iframe
        src={src}
        title="iframe-page"
        className="h-full w-full"
        onLoad={handleLoad}
      />
    </div>
  );
}
