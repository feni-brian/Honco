import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../data/mock-data";
import { geoFeatures } from "../data/mock-geo-features";
import { tokens } from "../theme";

const GeographyChart = ({ isDashboard = false }) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<ResponsiveChoropleth
			data={data}
			features={geoFeatures}
			theme={{
				axis: {
					domain: { line: { stroke: colours.grey[100] } },
					legend: { text: { fill: colours.grey[100] } },
					ticks: {
						line: { stroke: colours.grey[100], strokeWidth: 1 },
						text: { fill: colours.grey[100] },
					},
				},
				legends: { text: { fill: colours.grey[100] } },
			}}
			margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			domain={[0, 1_000_000]}
			unknownColor="#666666"
			label="properties.name"
			valueFormat=".2s"
			projectionScale={isDashboard ? 40 : 150}
			projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
			projectionRotation={[0, 0, 0]}
			borderWidth={1.5}
			borderColor="#ffffff"
			legends={
				isDashboard
					? undefined
					: [
							{
								anchor: "bottom-left",
								direction: "column",
								justify: true,
								translateX: 20,
								translateY: -100,
								itemsSpacing: 0,
								itemWidth: 94,
								itemHeight: 18,
								itemDirection: "left-to-right",
								itemTextColor: colours.grey[100],
								itemOpacity: 0.85,
								symbolSize: 18,
								effects: [
									{
										on: "hover",
										style: { itemTextColor: "#ffffff", itemOpacity: 1 },
									},
								],
							},
					  ]
			}
		/>
	);
};

export default GeographyChart;
