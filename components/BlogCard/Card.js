import React from "react";

export default function Card({ icon, title, desc }) {
	return (
		<div>
			<Image
				width={600}
				height={300}
				objectFit="cover"
				src={icon}
				alt={title}
			/>
			<h5>{title}</h5>
			<hr className="mr-7 mt-0 mb-5" />
			<p>{desc}</p>
			<button className="mt-5 text-sm font-semibold flex">
				<span className="mr-2">Read Post</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-4 h-4 mt-0"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</button>
		</div>
	);
}
