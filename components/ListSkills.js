import React from "react";

export default function ListSkills({
	role,
	title,
	actionShowPortfolios,
	descriptionStack,
}) {
	return (
		<>
			<div
				className={`block md:flex justify-between items-center mt-10 mb-10 text-slate-400 hover:text-gray hover:italic hover:cursor-pointer`}
				onClick={actionShowPortfolios}
			>
				<p className="text-base md:text-lg">{role}</p>
				<h2 className="mx-0 md:mt-0 mt-3 md:mb-0 mb-3 md:mx-12 uppercase font-bold text-xl md:text-3xl">
					{title}
				</h2>
				<div>
					<p className="text-sm truncate w-[250px] text-ellipsis overflow-hidden">
						{descriptionStack}
					</p>
				</div>
			</div>
			<hr className="text-gray" />
		</>
	);
}
