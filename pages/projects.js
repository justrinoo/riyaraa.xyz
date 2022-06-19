/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "components/Layout";
import ListSkills from "components/ListSkills";
import Image from "next/image";

export default function Projects() {
	const [showPortfolio, setShowPortfolio] = useState("zet-wallet");
	const actionShowPortfolios = (myPortfolio) => {
		setShowPortfolio(myPortfolio);
		return window.innerWidth <= 375
			? (window.location.href = "https://github.com/riyaraa")
			: setShowPortfolio(myPortfolio);
	};

	const showRedirectPortfolio = (redirectLink) => {
		return (window.location.href = redirectLink);
	};
	const showRedirectGithub = (redirectLink) => {
		return (window.location.href = redirectLink);
	};

	return (
		<Layout title={"Projects"} isMobile={false}>
			<section className="block md:flex justify-between mt-3 mb-3">
				<section className="w-full md:w-2/3">
					<ListSkills
						title="Zet-Wallet"
						role="Fullstack Web Developer"
						showPortfolio={showPortfolio}
						descriptionStack="Nodejs, NextJs, Redux, Redux Persist, Bootstrap Css, Midtrans"
						actionShowPortfolios={() => actionShowPortfolios("zet-wallet")}
					/>
					<ListSkills
						title="Paytix"
						role="Fullstack Web Developer"
						descriptionStack="Nodejs, ReactJs, Redux, Redux Persist, Bootstrap Css, Midtrans"
						actionShowPortfolios={() => actionShowPortfolios("paytix")}
					/>
					<ListSkills
						title="Clover Hire"
						role="Fullstack Web Developer"
						descriptionStack="Nodejs, NextJs, Redux, Redux Persist, Bootstrap Css, Midtrans"
						actionShowPortfolios={() => actionShowPortfolios("clover-hire")}
					/>
					<ListSkills
						title="GiatinAja"
						role="Frontend Web Developer"
						descriptionStack="Nodejs, ReactJs, TailwindCss"
						actionShowPortfolios={() => actionShowPortfolios("giatinaja")}
					/>
					{/* <ListSkills title="Zet-Wallet" role="Fullstack Developer" /> */}
				</section>
				<section className="hidden md:block ml-10 mt-1">
					<img
						className="object-contain h-96 w-96"
						src={
							showPortfolio === "zet-wallet"
								? "/images/z-wallet/Dashboard.png"
								: showPortfolio === "paytix"
								? "/images/paytix-web/Home.png"
								: showPortfolio === "clover-hire"
								? "/images/clover-hire/Home.png"
								: showPortfolio === "giatinaja" && "/images/GiatinAJa/Home.png"
						}
						alt="Image"
					/>
					<div className="flex items-center justify-around font-semibold">
						<div
							className="flex items-center flex-col-reverse cursor-pointer"
							onClick={() =>
								showRedirectPortfolio(
									showPortfolio === "zet-wallet"
										? "https://zet-wallet.vercel.app"
										: showPortfolio === "paytix"
										? "https://tickitz.vercel.app"
										: showPortfolio === "clover-hire"
										? "https://clover-hire.netlify.app"
										: showPortfolio === "giatinaja" && "https://giatinaja.com"
								)
							}
						>
							<span className="cursor-pointer">View More</span>
							<Image
								src="/icons/globe.svg"
								width={20}
								height={20}
								alt="View More"
							/>
						</div>
						<div
							className="flex items-center flex-col-reverse cursor-pointer"
							onClick={() =>
								showRedirectGithub(
									showPortfolio === "zet-wallet"
										? "https://github.com/riyaraa/Z-Wallet"
										: showPortfolio === "paytix"
										? "https://github.com/riyaraa/Tickitz-Frontend"
										: showPortfolio === "clover-hire"
										? "https://github.com/AhmadZaky19/clover-frontend"
										: showPortfolio === "giatinaja" &&
										  "https://github.com/giatinaja"
								)
							}
						>
							<span className="cursor-pointer">Github</span>
							<Image
								src="/icons/github.svg"
								width={20}
								height={20}
								alt="View More"
							/>
						</div>
					</div>
				</section>
			</section>
		</Layout>
	);
}
