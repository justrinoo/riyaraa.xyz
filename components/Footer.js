import React from "react";

export default function Footer({ showMenu }) {
	return (
		<>
			<footer
				className={
					showMenu
						? "bg-dark text-white text-center font-serif"
						: "text-center font-serif mx-auto"
				}
			>
				<p className="font-sans mb-2">
					Made With <b>NextJs</b> and <b>TailwindCss</b> Deploy in <b>Vercel</b>
					.
				</p>
				<p>&copy;2022 Rino satya Putra</p>
			</footer>
		</>
	);
}
