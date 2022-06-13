import React from "react";
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

interface Props {
  currentColor: string;
  id: string;
  type: "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined;
  height: string;
  width: string;
  data: { x: number; y: number }[];
  color: string;
}

const SparkLine = ({
  currentColor,
  id,
  type,
  height,
  width,
  data,
  color,
}: Props) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : ${y}",
        trackLineSettings: {
          visible: true,
          color: "#033e96",
          width: 1,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
