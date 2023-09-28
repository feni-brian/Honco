import { CssBaseline, ThemeProvider } from "@mui/material";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ColourModeContext, useMode } from "./theme";

function App() {
	const [theme, colourMode] = useMode();
	return (
		<ColourModeContext.Provider value={colourMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
          <></>
					<main className="content">
            <></>
						<Routes>
							<Route path="/" element={<></>} />
							<Route path="/team" element={<></>} />
							<Route path="/contacts" element={<></>} />
							<Route path="/invoices" element={<></>} />
							<Route path="/form" element={<></>} />
							<Route path="/bar" element={<></>} />
							<Route path="/pie" element={<></>} />
							<Route path="/line" element={<></>} />
							<Route path="/faq" element={<></>} />
							<Route path="/calendar" element={<></>} />
							<Route path="/geography" element={<></>} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColourModeContext.Provider>
	);
}

export default App;
