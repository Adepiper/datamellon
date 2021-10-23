import React from "react";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";
import { TimeSeries } from "pondjs";

const data = {
  name: "traffic",
  columns: ["time", "in", "out"],
  points: [
    [1400425947000, 52, 41],
    [1400425948000, 18, 45],
    [1400425949000, 26, 49],
    [1400425950000, 93, 81],
  ],
};

const timeseries = new TimeSeries(data);

const TimeSeriesChart = () => {
  return (
    <div>
      <ChartContainer timeRange={timeseries.timerange()} width={500}>
        <ChartRow height="200">
          <YAxis
            id="axis1"
            label="AUD"
            min={0.5}
            max={1.5}
            width="60"
            type="linear"
            format="$,.2f"
          />
          <Charts>
            <LineChart axis="axis1" series={timeseries} />
            <LineChart axis="axis2" series={timeseries} />
          </Charts>
          <YAxis
            id="axis2"
            label="Euro"
            min={0.5}
            max={1.5}
            width="80"
            type="linear"
            format="$,.2f"
          />
        </ChartRow>
      </ChartContainer>
    </div>
  );
};

export default TimeSeriesChart;
