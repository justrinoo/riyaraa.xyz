import Layout from "components/Layout";
import { useRouter } from "next/router";
export default function Home() {
	const router = useRouter();
	const aboutMe = () => {
		router.push("/@me");
	};

	return (
		<Layout title="Me" isMobile={true}>
			<main className="flex mb-44">
				<section className="w-full md:w-3/5 px-6 md:px-16 py-14 mt-10">
					<h1 className="text-center  md:text-left text-3xl md:text-6xl leading-tight font-bold text-dark tracking-wider">
						Software Engineer as Frontend Developer From Indonesia.
					</h1>
					<div className="mx-auto mt-10 md:mt-0 rounded-full md:absolute md:bottom-0 md:top-auto transition ease-in-out delay-150 hover:-translate-y-2 duration-300 cursor-pointer bg-dark w-10 mb-10">
						<img
							src="/icons/arrow.svg"
							width={40}
							onClick={aboutMe}
							height={40}
							alt="next"
						/>
					</div>
				</section>
			</main>
		</Layout>
	);
}
