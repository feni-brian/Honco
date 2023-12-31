import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./progress-circle";

const StatisticsBox = ({ title, subTitle, icon, progress, increase }) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box width="100%" m="0 30px">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{icon}
					<Typography variant="h4" fontWeight="bold" sx={{ color: colours.grey[100] }}>
						{title}
					</Typography>
				</Box>

				<Box>
					<ProgressCircle progress={progress} />
				</Box>
			</Box>

			<Box display="flex" justifyContent="space-between" mt="2px">
				<Typography variant="h5" sx={{ color: colours.greenAccent[500] }}>
					{subTitle}
				</Typography>
				<Typography
					variant="h5"
					fontStyle="italic"
					sx={{ color: colours.greenAccent[600] }}
				>
					{increase}
				</Typography>
			</Box>
		</Box>
	);
};

export default StatisticsBox;
