import { StaticImageData } from "next/image";

interface Props {
  width: number;
  height: number;
  steps: number;
  // imageUrl: StaticImageData;
  imageUrl: string;
}

const Sprite = ({ width, height, steps, imageUrl }: Props) => {
  console.log("en el componente ", imageUrl);

  const backgroundPositionX = steps * width * -1;
  return (
    <div
      className="familia"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `url(${imageUrl}) no-repeat`,
        backgroundPosition: `${backgroundPositionX}px 0`,
        animation: "move 2s steps(20) infinite",
      }}
    />
  );
};

export default Sprite;
