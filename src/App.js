import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "./modules/calendar";
import { Bar } from "./modules/charts";
import Contacts from "./modules/contacts";
import FAQ from "./modules/faq";
import Form from "./modules/form";
import SideBar from "./modules/global/Sidebar";
import TopBar from "./modules/global/Topbar";
import Invoices from "./modules/invoices";
import Team from "./modules/team";
import { ColourModeContext, useMode } from "./theme";

function App() {
	const [theme, colourMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<ColourModeContext.Provider value={colourMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<SideBar isSidebar={isSidebar} />
					<main className="content">
						<TopBar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route path="/" element={<></>} />
							<Route path="/team" element={<Team />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/form" element={<Form />} />
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<></>} />
							<Route path="/line" element={<></>} />
							<Route path="/geography" element={<></>} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColourModeContext.Provider>
	);
}

export default App;
