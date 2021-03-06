import { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const data = [
  {
    country: "Lithuania",
    litres: 501.9,
  },
  {
    country: "Czech Republic",
    litres: 301.9,
  },
  {
    country: "Ireland",
    litres: 201.1,
  },
  {
    country: "Germany",
    litres: 165.8,
  },
  {
    country: "Australia",
    litres: 139.9,
  },
  {
    country: "Austria",
    litres: 128.3,
  },
  {
    country: "UK",
    litres: 99,
  },
  {
    country: "Belgium",
    litres: 60,
  },
  {
    country: "The Netherlands",
    litres: 50,
  },
];

function App() {
  const chartRef = useRef(am4core.create("chartdiv", am4charts.PieChart));

  useEffect(() => {
    let series = chartRef.current.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    chartRef.current.data = data;
    chartRef.current.legend = new am4charts.Legend();
  }, []);

  return (
    <div className="App">
      <div
        data-testid="chartdiv"
        style={{ height: "600px", width: "100%" }}
        id="chartdiv"
      ></div>
    </div>
  );
}

export default App;
