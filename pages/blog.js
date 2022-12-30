import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
	return (
		<Layout title={"Blog Page"}>
			<section>
				<div className="grid grid-cols-3 gap-3 mt-20">
					<div>
						<h3 className="text-5xl font-semibold">Untitled Blog</h3>
						<input
							className="mt-5 outline-none border-[1.5px] border-slate-300 py-2 px-6 rounded-tl-full rounded-bl-full ml-2"
							type="text"
							placeholder="Search..."
						/>
						<button className="py-2 bg-dark border-[1.5px] border-slate-300 px-8 rounded-tr-full rounded-br-full text-white">
							Search
						</button>
					</div>
				</div>
			</section>

			<section className="mt-16">
				<div className="flex items-start">
					<Link href="#">
						<span className="mx-0 block cursor-pointer font-semibold">
							View All
							<span className="border border-b-2 border-dark block"></span>
						</span>
					</Link>
					<Link href="#">
						<span className="ml-10 block cursor-pointer text-slate-400">
							Design
						</span>
					</Link>
					<Link href="#">
						<span className="ml-10 block cursor-pointer text-slate-400">
							Coding
						</span>
					</Link>
					<Link href="#">
						<span className="mx-10 block cursor-pointer text-slate-400">
							Sharing
						</span>
					</Link>
				</div>
			</section>

			<section className="grid grid-cols-2 gap-2 mt-8">
				<div>
					<Image
						width={600}
						height={300}
						objectFit="cover"
						src="https://images.unsplash.com/photo-1670854747451-73701f3fdc79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Image"
					/>
					<h5>UX review presentations</h5>
					<hr className="mr-7 mt-0 mb-5" />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
						atque saepe eveniet maxime maiores quasi ratione aperiam voluptates
						molestiae, nisi commodi sapiente rem tempora doloribus quibusdam et
						praesentium fugit nihil?
					</p>
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
			</section>
		</Layout>
	);
}
