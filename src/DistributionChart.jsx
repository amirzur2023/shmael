import React from "react";
import Plot from "react-plotly.js";

const DistributionPlot = ({
  counts, show
}) => (
  <div className="distributionPlot" style={{
    visibility: show ? "visible" : "hidden",
    position: "absolute",
    left: 0,
    right: 0
  }}>
    <Plot 
        data={[{
            y: [1, 2, 3, 4, 5, 6],
            x: counts,
            type: 'bar',
            marker: {color: 'green'},
            orientation: 'h',
            hoverinfo: "x"
        }]}
        layout={{
            xaxis: {title: "Count"},
            yaxis: {title: "Number of guesses", autorange: "reversed"},
            title: "Distribution of Guesses"
        }}
    />
  </div>
);

export default DistributionPlot;
