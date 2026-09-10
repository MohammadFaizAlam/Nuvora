import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<>
			<Head>
				<title>Nuvora | Digital Marketing for Small Businesses in Mumbai</title>
				<meta
					name="description"
					content="Nuvora runs your website, Google Business Profile, social media, ads and reviews as one stack — built to bring Indian SMEs real enquiries."
				/>
				<link rel="icon" href="/Dark%20Nuvora%20logo.jpg" type="image/jpeg" />
				<link rel="shortcut icon" href="/Dark%20Nuvora%20logo.jpg" type="image/jpeg" />
				<link rel="apple-touch-icon" href="/Dark%20Nuvora%20logo.jpg" />
			</Head>
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			<Footer />
		</>
	);
}
