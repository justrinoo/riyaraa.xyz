import React, { useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, children, isMobile }) {
	const [showMenu, setShowMenu] = useState(false);
	const showMenuNavigation = () => {
		return showMenu === false ? setShowMenu(true) : setShowMenu(false);
	};
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Header showMenu={showMenu} showMenuNavigation={showMenuNavigation} />
			{showMenu ? (
				<section
					style={{ lineHeight: "80px" }}
					className={
						showMenu
							? "bg-dark text-white min-h-screen flex flex-col justify-center text-center"
							: "min-h-screen text-center"
					}
				>
					<div>
						<span className="text-4xl font-extrabold hover:underline hover:cursor-pointer">
							About
						</span>
					</div>
					<div>
						<span className="text-4xl font-extrabold hover:underline hover:cursor-pointer">
							Projects
						</span>
					</div>
					<div>
						<span className="text-4xl font-extrabold hover:underline hover:cursor-pointer">
							Blog
						</span>
					</div>
				</section>
			) : null}
			{showMenu ? null : children}
			<Footer showMenu={showMenu} />
		</>
	);
}
