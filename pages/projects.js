/* eslint-disable @next/next/no-img-element */
import Layout from "components/Layout";
import React from "react";
import Image from "next/image";

export default function Projects() {
	return (
		<Layout>
			<section className="px-16 mt-10 min-h-screen">
				<h1 className="text-4xl text-center font-bold">Projects</h1>
				<span className="text-center block mt-4 font-semibold">
					#Learning By Doing Trial And Error.
				</span>

				<h2 className="text-2xl mt-10 text-center">
					Have a look on github first, because it{"'"}s in the works
				</h2>

				<a
					href="https://github.com/riyaraa"
					className="text-center mt-4 block text-blue-400 hover:underline font-semibold"
				>
					Read More
				</a>
				{/* <section className="flex flex-row flex-wrap">
					<section className="w-2/4 mt-5 rounded-md">
						<img
							src="/images/Dashboard.png"
							width={500}
							className="mx-auto py-3"
							height={300}
							alt="Portfolio"
						/>
						<h2 className="text-xl text-center font-bold mt-3">Z-Wallet</h2>
						<p className="mt-3 text-justify text-sm px-4 text-neutral-600">
							Z-Wallet is a top up money site where you can make transactions
							with everyone on z-wallet, the display on the z-wallet website is
							very easy to reach.
						</p>
						<div className="mx-auto mb-4 transition duration-100 ease-in text-center mt-5">
							<button className="mx-3 bg-blue-400 text-white font-bold px-6 py-2 rounded-md">
								Visit
							</button>
							<button className="mx-3 bg-dark text-white font-bold px-6 py-2 rounded-md">
								Github
							</button>
						</div>
					</section>
					<section className="w-2/4 mt-5 rounded-md">
						<img
							src="/images/Dashboard.png"
							width={500}
							className="mx-auto py-3"
							height={300}
							alt="Portfolio"
						/>
						<h2 className="text-xl text-center font-bold mt-3">Z-Wallet</h2>
						<p className="mt-3 text-justify text-sm px-4 text-neutral-600">
							Z-Wallet is a top up money site where you can make transactions
							with everyone on z-wallet, the display on the z-wallet website is
							very easy to reach.
						</p>
						<div className="mx-auto mb-4 transition duration-100 ease-in text-center mt-5">
							<button className="mx-3 bg-blue-400 text-white font-bold px-6 py-2 rounded-md">
								Visit
							</button>
							<button className="mx-3 bg-dark text-white font-bold px-6 py-2 rounded-md">
								Github
							</button>
						</div>
					</section>
					<section className="w-2/4 mt-5 rounded-md">
						<img
							src="/images/Dashboard.png"
							width={500}
							className="mx-auto py-3"
							height={300}
							alt="Portfolio"
						/>
						<h2 className="text-xl text-center font-bold mt-3">Z-Wallet</h2>
						<p className="mt-3 text-justify text-sm px-4 text-neutral-600">
							Z-Wallet is a top up money site where you can make transactions
							with everyone on z-wallet, the display on the z-wallet website is
							very easy to reach.
						</p>
						<div className="mx-auto mb-4 transition duration-100 ease-in text-center mt-5">
							<button className="mx-3 bg-blue-400 text-white font-bold px-6 py-2 rounded-md">
								Visit
							</button>
							<button className="mx-3 bg-dark text-white font-bold px-6 py-2 rounded-md">
								Github
							</button>
						</div>
					</section>

					{/* <section className="p-2 rounded border-dotted border-4 flex flex-row w-11/12 mx-auto">
						<div className="w-full h-80 bg-green-400 rounded example-image-projects"></div>
						<div className="flex flex-col justify-between">
							<div className="mx-5 mt-4">
								<h1 className="text-2xl font-bold text-dark">This My Title</h1>
								<p className="text-gray mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
									vitae mollitia. Perspiciatis earum enim maxime quaerat rerum
									architecto, ullam necessitatibus nesciunt mollitia odit
									adipisci nulla libero id saepe, magnam sed!
								</p>
								<div className="flex">
									<p className="mt-5">Visit</p>
									<p className="mt-5">Github</p>
								</div>
							</div>
							<div className="mx-5 flex">
								<div className="bg-red-900 rounded-full h-auto mx-1 w-auto p-1 text-sm text-white">
									ReactJs
								</div>
								<div className="bg-red-900 rounded-full h-auto mx-1 w-auto p-1 text-sm text-white">
									ReactJs
								</div>
								<div className="bg-red-900 rounded-full h-auto mx-1 w-auto p-1 text-sm text-white">
									ReactJs
								</div>
								<div className="bg-red-900 rounded-full h-auto mx-1 w-auto p-1 text-sm text-white">
									ReactJs
								</div>
							</div>
						</div>
					</section> */}
				{/* </section> */}
			</section>
		</Layout>
	);
}
