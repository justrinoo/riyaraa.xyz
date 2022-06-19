import React, { useState } from "react";
import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ThisMe() {
	const [conditionHover, setConditionHover] = useState("");
	const skills = [
		"Javascript",
		"Typescript",
		"NodeJs",
		"ReactJs",
		"NextJs",
		"ExpressJs",
		"Mysql",
		"Figma",
		"Trello",
	];

	return (
		<Layout title="About Me">
			<section className="px-0 md:px-16 mt-0 md:mt-10 py-10 mb-10">
				<section className="block md:flex flex-row">
					<section>
						<h1 className="text-3xl md:text-5xl font-bold leading-normal">
							Code for
							<span className="bg-yellow text-white rounded leading-normal">
								Users.
							</span>{" "}
							<br />
							Work for{" "}
							<span className="bg-blue-300 text-white rounded leading-normal">
								Passion.
							</span>{" "}
							<br />
							Life for{" "}
							<span className="bg-pink-200 text-white rounded leading-normal">
								Family.
							</span>
						</h1>
					</section>
					<section
						className={`mx-auto font-serif w-full md:w-2/6 md:mt-0 mt-10 ${
							conditionHover === "hover"
								? "transition duration-150 ease-in rotate-0"
								: "transition duration-150 ease-in-out rotate-12"
						}`}
						onMouseMove={() => setConditionHover("hover")}
						onMouseLeave={() => setConditionHover("")}
					>
						<div className="flex items-center">
							<div className="rounded-full bg-dark">
								<Image
									src="/images/me.png"
									width={80}
									height={70}
									className="object-cover"
									alt="is me"
								/>
							</div>
							<h6 className="mx-2">Hi, my name is Rino Satya Putra</h6>
						</div>
						<p className="font-bold mt-2">
							I{"'"}m a software engineer as{" "}
							<span className="border-b-2">Frontend Developer</span>{" "}
							specializing in developing websites using javascript, and now I
							{"'"}m currently learning about TypeScript & Golang, and I{"'"}m
							also learning about UI/UX Designer.
						</p>
					</section>
				</section>

				<section className="mt-10 md:mt-28">
					<section className="flex flex-col">
						<div>
							<h2 className="font-bold">Current Work</h2>
							<p className="w-full md:w-2/5 mt-3">
								I am currently working in a company in South Jakarta, and every
								day I create system design documentation for developers using
								components, colors, fonts, etc. In addition, I am also active in
								the{" "}
								<span
									className="font-bold"
									onClick={() => {
										window.location.href = "https://giatinaja.com";
									}}
								>
									Giatinaja
								</span>{" "}
								community, a community that I created with my friends to create
								learning themes about programming, design, and business.
							</p>
						</div>
						<div className="mt-10 md:mt-14">
							<h2 className="font-bold">Educations</h2>
							<div className="flex flex-col text-dark mt-3">
								<div className="flex items-center">
									<h3 className="font-bold text-base md:text-xl">
										Arkademy Tech Academy — Fullstack Developer ( Sep 2021 - Dec
										2021 )
									</h3>
								</div>
								<div className="flex items-center mt-5">
									<h3 className="font-bold text-base md:text-xl">
										SMK Jakarta Pusat 1 — Rekayasa Perangkat Lunak ( Juli 2018 -
										Juli 2021 )
									</h3>
								</div>
							</div>
						</div>
						<div className="mt-14">
							<h2 className="font-bold">SKILLS</h2>
							<h1 className="text-base md:text-xl mt-3 font-bold text-dark">
								Javascript / Typescript / NodeJs / ReactJs / NextJs / Redux /
								TailwindCss / BootstrapCss / Figma / Trello
							</h1>
						</div>
					</section>
				</section>

				<section className="mt-10 md:mt-20">
					<h1 className="text-2xl font-bold">Contact</h1>
					<span className="text-gray mt-2 text-sm">
						I{"'"}m always open if you have any questions or collaborate,
						contact me below.
					</span>
					<ul className="list-disc list-inside mt-6">
						<div className="block md:flex mt-3">
							<li className="font-semibold">Github: </li>
							<a
								target="_blank"
								href="https://github.com/riyaraa"
								rel="noopener noreferrer"
							>
								<span className="mx-0 md:mx-5 cursor-pointer hover:underline font-semibold md:text-base text-sm">
									https://github.com/riyaraa
								</span>
							</a>
						</div>
						<div className="block md:flex mt-3">
							<li className="font-semibold">LinkedIn: </li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/rinosatyaputra"
								rel="noopener noreferrer"
							>
								<p className="mx-0 md:mx-5 cursor-pointer hover:underline font-semibold md:text-base text-sm truncate">
									https://www.linkedin.com/in/rinosatyaputra
								</p>
							</a>
						</div>
						<div className="block md:flex mt-3">
							<li className="font-semibold">Instagram: </li>
							<a
								target="_blank"
								href="https://instagram.com/rinoosp"
								rel="noopener noreferrer"
							>
								<span className="mx-0 md:mx-5 cursor-pointer hover:underline font-semibold md:text-base text-sm">
									https://instagram.com/rinoosp
								</span>
							</a>
						</div>
						<div className="block md:flex mt-3">
							<li className="font-semibold">Telegram: </li>
							<a
								target="_blank"
								href="https://t.me/riyaraa"
								rel="noopener noreferrer"
							>
								<span className="mx-0 md:mx-5 cursor-pointer hover:underline font-semibold md:text-base text-sm">
									https://t.me/riyaraa
								</span>
							</a>
						</div>
					</ul>
				</section>
			</section>
		</Layout>
	);
}
