import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";

const Card = (props: {title: string; href: string; text: string}) => (
	<a
		href={props.href}
		className="m-4 p-6 text-left no-underline rounded-xl max-w-xs border-gray-100 border-2 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500">
		<h2 className="m-0 mb-4 text-2xl">{props.title} &rarr;</h2>
		<p className="m-0 text-xl">{props.text}</p>
	</a>
);

const Home: NextPage = () => {
	return (
		<div className="py-0 px-8">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen py-16 px-0 flex flex-col items-center justify-center">
				<h1 className="m-0 text-7xl">
					Welcome to{" "}
					<a href="https://nextjs.org" className="text-blue-500">
						Next.js!
					</a>
				</h1>

				<p className="my-16 mx-0 text-2xl">
					Get started by editing <kbd className="kbd text-base">pages/index.tsx</kbd>
				</p>

				<div className="flex items-center justify-center flex-wrap max-w-4xl">
					<Card title="Documentation" text="Find in-depth information about Next.js features and API." href="https://nextjs.org/docs" />
					<Card title="Learn" text="Learn about Next.js in an interactive course with quizzes!" href="https://nextjs.org/learn" />
					<Card
						title="Examples"
						text="Discover and deploy boilerplate example Next.js projects."
						href="https://github.com/vercel/next.js/tree/canary/examples"
					/>
					<Card
						title="Deploy"
						text="Instantly deploy your Next.js site to a public URL with Vercel."
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					/>
				</div>
			</main>

			<footer className="flex py-8 px-0 border-t-2 border-t-gray-100 items-center justify-center">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					className="flex justify-center items-center flex-grow"
					rel="noopener noreferrer">
					Powered by{" "}
					<span className="h-4 ml-2">
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
