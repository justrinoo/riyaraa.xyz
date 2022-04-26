import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
export default function Header({ showMenu, showMenuNavigation }) {
	const router = useRouter();
	const navLinkTo = (text) => {
		router.push(text);
	};

	return (
		<>
			<header
				className={
					showMenu
						? "bg-dark px-6 md:px-16 flex justify-between items-center border-b-2 border-gray"
						: "px-6 md:px-16 flex justify-between items-center border-b-2 border-gray"
				}
			>
				<section className="flex items-center mb-3 mt-3">
					<div
						className={
							showMenu
								? "text-white mr-14 font-serif font-bold text-xl underline tracking-wider"
								: "mr-14 font-serif font-bold text-xl underline tracking-wider"
						}
					>
						<Link href="/" passHref>
							rino
						</Link>
					</div>

					<div className="hidden md:flex items-center">
						<div className="mx-3">
							<span
								className="text-sm text-dark font-bold cursor-pointer hover:underline"
								onClick={() => navLinkTo("@me")}
							>
								About
							</span>
						</div>
						<div className="mx-3">
							<span
								className="text-sm text-dark font-bold cursor-pointer hover:underline"
								onClick={() => navLinkTo("projects")}
							>
								Projects
							</span>
						</div>
						<div className="mx-3">
							<span
								className="text-sm text-dark font-bold cursor-pointer hover:underline"
								onClick={() => navLinkTo("blog")}
							>
								Blog
							</span>
						</div>
					</div>
				</section>
				<section className="flex md:hidden">
					{showMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={showMenu ? "text-white h-5 w-5" : "h-5 w-5"}
							viewBox="0 0 20 20"
							fill="currentColor"
							onClick={showMenuNavigation}
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={showMenuNavigation}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</section>

				{/* <div className="hidden md:flex items-center">
					<div className="mx-2">Night</div>
					<div className="mx-2">Dark</div>
				</div> */}
			</header>
		</>
	);
}
