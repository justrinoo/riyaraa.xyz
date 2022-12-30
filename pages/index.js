import Layout from "components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Home() {
	const router = useRouter();
	const aboutMe = () => {
		router.push("/@me");
	};

	return (
		<Layout title="Me">
			<main className="flex">
				<section className="py-14 md:mt-10 mt-0">
					<h1 className="w-auto md:w-2/3 text-left md:text-center mx-auto text-2xl md:text-6xl font-bold text-dark">
						Software Engineer as Frontend Developer Base In Indonesia.
					</h1>
					<p className="text-left md:text-center mt-5 font-light md:text-base text-sm">
						Thankyou for visit my website, nice to meet you👋!
					</p>
					<div className="mx-0 md:mx-auto mt-10 md:mt-0 rounded-full md:absolute md:bottom-0 md:top-auto transition ease-in-out delay-150 hover:-translate-y-2 duration-300 cursor-pointer bg-dark w-10 h-10 text-center mb-10">
						<Image
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
