import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box mb="30px">
			<Typography
				variant="h1"
				color={colours.grey[100]}
				fontWeight="bold"
				sx={{ m: "0 0 5px 0" }}
			>
				{title}
			</Typography>
			<Typography variant="h5" color={colours.greenAccent[400]}>
				{subTitle}
			</Typography>
		</Box>
	);
};

export default Header;
