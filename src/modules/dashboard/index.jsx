import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import BarChart from "../../components/bar-chart";
import GeographyChart from "../../components/geography-chart";
import Header from "../../components/header";
import LineChart from "../../components/line-chart";
import ProgressCircle from "../../components/progress-circle";
import StatisticsBox from "../../components/statistics-box";
import { mockTransactions } from "../../data/mock-data";
import { tokens } from "../../theme";

const Dashboard = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Dashboard" subtitle="Welcome to your dashboard" />
				<Box>
					<Button
						sx={{
							backgroundColor: colours.blueAccent[700],
							color: colours.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* Row 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colours.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatisticsBox
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon sx={{ color: colours.greenAccent[600], fontSize: "26px" }} />
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colours.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatisticsBox
						title="431,225"
						subtitle="Sales Obtained"
						progress="0.50"
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colours.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatisticsBox
						title="32,441"
						subtitle="New Clients"
						progress="0.30"
						increase="+5%"
						icon={
							<PersonAddIcon
								sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colours.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<StatisticsBox
						title="1,325,134"
						subtitle="Traffic Received"
						progress="0.80"
						increase="+43%"
						icon={
							<TrafficIcon
								sx={{ color: colours.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				{/* Row 2 */}
				<Box gridColumn="span 8" gridRow="span 2" backgroundColor={colours.primary[400]}>
					<Box
						mt="25px"
						p="0 30px"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography variant="h5" fontWeight="600" color={colours.grey[100]}>
								Revenue Generated
							</Typography>
							<Typography
								variant="h3"
								fontWeight="bold"
								color={colours.greenAccent[500]}
							>
								$59,342.32
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colours.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height="250px" m="-20px 0 0 0">
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colours.primary[400]}
					overflow="auto"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={`4px solid ${colours.primary[500]}`}
						colors={colours.grey[100]}
						p="15px"
					>
						<Typography color={colours.grey[100]} variant="h5" fontWeight="600">
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, index) => (
						<Box
							key={`${transaction.txId}-${index}`}
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colours.primary[500]}`}
							p="15px"
						>
							<Box>
								<Typography
									color={colours.greenAccent[500]}
									variant="h5"
									fontWeight="600"
								>
									{transaction.txId}
								</Typography>
								<Typography color={colours.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colours.grey[100]}>{transaction.date}</Box>
							<Box
								backgroundColor={colours.greenAccent[500]}
								p="5px 10px"
								borderRadius="4px"
							>
								${transaction.cost}
							</Box>
						</Box>
					))}
				</Box>
				{/* Row 3 */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colours.primary[400]}
					p="30px"
				>
					<Typography variant="h5" fontWeight="600">
						Campaign
					</Typography>
					<Box display="flex" flexDirection="column" alignItems="center" mt="25px">
						<ProgressCircle size="125" />
						<Typography
							variant="h5"
							color={colours.greenAccent[500]}
							sx={{ mt: "15px" }}
						>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra miscellaneous costs and expenditures</Typography>
					</Box>
				</Box>
				<Box gridColumn="span 4" gridRow="span 2" backgroundColor={colours.primary[400]}>
					<Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
						Sales Quantity
					</Typography>
					<Box height="250px" mt="-20px">
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colours.primary[400]}
					padding="30px"
				>
					<Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
						Geography Based Traffic
					</Typography>
					<Box height="200px">
						<GeographyChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
