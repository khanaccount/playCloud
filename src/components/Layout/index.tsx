import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout: React.FC = () => {
	return (
		<>
			<header className="header">
				<Header />
			</header>

			<main className="main">
				<Outlet />
			</main>

			<footer className="footer"></footer>
		</>
	);
};
