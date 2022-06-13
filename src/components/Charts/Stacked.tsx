import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

interface Props {
  width: string;
  height: string;
}

const Stacked = ({ width, height }: Props) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={
        // {
        //   majorGridLines: { width: 0 },
        //   minorGridLines: { width: 0 },
        //   majorTickLines: { width: 0 },
        //   minorTickLines: { width: 0 },
        //   interval: 1,
        //   lineStyle: { width: 0 },
        //   labelIntersectAction: "Rotate45",
        //   valueType: "Category",
        // }
        stackedPrimaryXAxis
      }
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
