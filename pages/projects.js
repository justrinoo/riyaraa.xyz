/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "components/Layout";
import ListSkills from "components/ListSkills";
import Image from "next/image";

export default function Projects() {
	const projects = [
		{
			2022: [
				{
					title: "Paytix",
					works:
						"Javascript, Nodejs, Express Js, Redis, MYSQL, ReactJs, Redux, Redux Persist, Bootstrap Css, Midtrans",
					role: "Fullstack Developer",
					company: "/images/fazztrack-logo.svg",
					placement: "Jakarta, DKI Jakarta",
					job: "Bootcamp",
					status: "Active",
					color: "cyan",
				},
				{
					title: "Zet-Wallet",
					works:
						"Javascript, Nodejs, NextJs, Redux, Redux Persist, Bootstrap Css, Midtrans",
					role: "Fullstack Developer",
					company: "/images/fazztrack-logo.svg",
					placement: "Jakarta, DKI Jakarta",
					job: "Bootcamp",
					status: "Active",
					color: "cyan",
				},
				{
					title: "Clover Hire",
					works:
						"Javascript, Nodejs, NextJs, Redux, Redux Persist, Bootstrap Css, Midtrans",
					role: "Fullstack Developer",
					company: "/images/fazztrack-logo.svg",
					placement: "Jakarta, DKI Jakarta",
					job: "Bootcamp",
					status: "Active",
					color: "cyan",
				},
				{
					title: "POS Application (Baresto)",
					works:
						"Javascript, NodeJs, ReactJs, Bootstrap Css, Redux, Redux Persist",
					role: "Frontend Developer",
					company: "/images/baresto-logo.png",
					placement: "Bandung, Jawa Barat",
					job: "Fulltime",
					status: "Active",
					color: "green",
				},
				{
					title: "Caroline (Autopedia)",
					works: "Typescript, NextJs, TailwindCss, Search Engine Optimization",
					role: "Frontend Developer",
					company: "/images/caroline-logo.png",
					placement: "Jakarta, DKI Jakarta",
					job: "Freelance",
					status: "Active",
					color: "red",
				},
				{
					title: "Kalbe Farma",
					works: "Typescript, NextJs, TailwindCss",
					role: "Frontend Developer",
					company: "/images/kalbe-logo.svg",
					placement: "Jakarta, DKI Jakarta",
					job: "Freelance",
					status: "Active",
					color: "green",
				},
				{
					title: "Mandiri Inhealth",
					works: "Javascript, React Js, Bootstrap Css, Recoil",
					role: "Frontend Developer",
					company: "/images/mandiri-inhealth-logo.png",
					placement: "Jakarta, DKI Jakarta",
					job: "Contract",
					status: "Internal",
					color: "blue",
				},
			],
		},
	];

	// const [showPortfolio, setShowPortfolio] = useState("zet-wallet");
	// const actionShowPortfolios = (myPortfolio) => {
	// 	setShowPortfolio(myPortfolio);
	// 	return window.innerWidth <= 375
	// 		? (window.location.href = "https://github.com/riyaraa")
	// 		: setShowPortfolio(myPortfolio);
	// };

	// const showRedirectPortfolio = (redirectLink) => {
	// 	return (window.location.href = redirectLink);
	// };
	// const showRedirectGithub = (redirectLink) => {
	// 	return (window.location.href = redirectLink);
	// };

	return (
		<Layout title={"Projects"} isMobile={false}>
			<section>
				<div className="text-center">
					<h4 className="text-center mt-5 text-sm">Projects</h4>
					<h2 className="capitalize md:text-2xl text-xl mt-5 mb-5 font-semibold">
						my experience in working on the project
					</h2>
				</div>
				<span>2022</span>
				<hr />
				<section>
					{projects.map((item, idx) => {
						return Object.values(item).map((value) => {
							return value.map((result) => {
								return (
									<div key={idx}>
										<div className="md:grid grid-cols-4 gap-4 mt-5 mb-5 md:hover:translate-x-8 hover:translate-x-0 hover:transition">
											<div>
												<h1 className="xl:text-xl lg:text-xl md:text-xl text-base font-semibold">
													{result.title}{" "}
													<span
														className={`text-[12px] mb-3 ${
															result.status === "Active"
																? "border-[1.5px] border-green-600 text-green-600"
																: "bg-dark"
														} text-white p-1 rounded-full`}
													>
														{result.status}
													</span>
												</h1>
												<p className="xl:text-sm lg:text-sm md:text-sm text-xs text-slate-600">
													{result.job} - {result.placement}
												</p>
											</div>
											<div className="md:mx-3 mx-0 md:mt-0 mt-3">
												<h6>Position</h6>
												<p className="xl:text-base lg:text-base md:text-base text-sm text-slate-600">
													{result.role}
												</p>
											</div>
											<div>
												{" "}
												<div className="md:mx-3 mx-0 md:mt-0 mt-3">
													<h6>Work</h6>
													<p className="text-slate-600 xl:text-base lg:text-base md:text-base text-sm">
														{result.works}
													</p>
												</div>
											</div>
											<div className="md:text-right text-left">
												<Image
													src={result.company}
													alt={result.title}
													width={100}
													height={100}
													objectFit="contain"
												/>
											</div>
										</div>
										<div className="mx:0">
											<hr className="text-slate-300" />
										</div>
									</div>
								);
							});
						});
					})}
				</section>
			</section>
		</Layout>
	);
}
