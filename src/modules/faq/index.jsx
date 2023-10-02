import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import Header from "../../components/header";
import { tokens } from "../../theme";

const FAQ = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	const [expanded, setExpanded] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Some of the most frequently asked questions by users" />
			<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colours.greenAccent[500]} variant="h5">
						What is Admin Desktop Enterprise?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Admin Desktop Enterprise is software designed to help you manage your
						accounting and business needs efficiently and with ease. It comes with the
						functionality to handle accounting, payroll, payments, inventory, and more.
						It also has a familiar Admin look-and-feel. Whether you’re new to business
						management software or already a Admin customer, Admin Desktop Enterprise
						makes it easy to run your business from end to end.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colours.greenAccent[500]} variant="h5">
						Manage your rates.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Your default base rate is entered when you first list your property on Vrbo.
						It is stored in the Settings section of your Vrbo account. Within your rates
						settings, you can edit your base rate, as well as add or edit a base
						discount. Within your rates calendar, you can override your base to offer a
						different rate for a specific day or longer without impacting your default
						rate. You can apply any rate you adjusted to the same dates for the
						following year. Adjustments you make to your rates don’t apply to upcoming
						reservations that have already been accepted or confirmed.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colours.greenAccent[500]} variant="h5">
						Manage your fees.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Fees can be applied to all dates on your rates calendar. There are two types
						of fees: Standard: fees for extra guests, cleaning, and pets; Custom: fees
						defined by your business that are not covered in standard fees. If you’ve
						previously defined a tax percentage in the Rules and Policies section of
						your listing, a checkbox is presented next to each fee, should you require
						tax to be added. If a tax percentage isn’t defined, or you’re in a
						jurisdiction where we’re collecting and remitting taxes on your behalf, the
						taxable checkboxes aren’t presented next to each fee. To add or edit fees:
						<ul>
							<li>Log in to your account.</li>
							<li>Select the listing if you have more than one rental property. </li>
							<li>Select Calendar.</li>
							<li>Select Settings, then Fees.</li>
							<li>Under Standard Fees, select up to three appropriate fees.</li>
							<li>Select Fee type.</li>
							<li>Enter amount.</li>
							<li>
								Add custom fees details, if needed. You can select up to 3 custom
								fees.
							</li>
							<li>Once all the required information is entered, select Save.</li>
						</ul>
						Any changes to your fees are only applied to future bookings. If you’ve
						already confirmed a reservation and want to add fees, you need to send your
						guest an additional payment request to collect those funds before the guest
						completes their stay.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colours.greenAccent[500]} variant="h5">
						How easy is Admin Desktop Enterprise to use?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						One of the best things about Admin Desktop Enterprise is that it looks and
						works very much like our other Admin software. If you’re already a Admin
						Desktop Pro or Premier customer, your staff will feel comfortable with
						Enterprise right from the start. There’s no steep learning curve, which
						means your employees can get up to speed quickly. Plus, we provide in-depth
						training to help you and your staff quickly master the new features. New to
						Admin altogether? No problem. We offer free online training to help get you
						and your staff up and running quickly.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colours.greenAccent[500]} variant="h5">
						Is Admin Desktop Enterprise right for my business?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						If you’re looking to use flexible, comprehensive tools on the go, anytime,
						anywhere, then Admin Online may be a great choice for you. But if your needs
						are greater, Admin Enterprise is specifically designed to grow with
						product-based businesses with inventory needs, no matter the size. With
						Enterprise, you can scale the software as your business evolves, allowing
						you to add on functionality as you need it. If you’re looking to manage
						pricing more efficiently, have employees in specialized roles and functions,
						have inventory as a core part of your business, or have multiple locations
						that need to be tracked and managed, Admin Enterprise would also work great
						for you. Admin Enterprise also makes an ideal option if you’re seeking an
						alternative to the accounting and business management solutions that can
						cost tens of thousands of dollars.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
