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
				<title>Nuvora | Lead Generation & Customer Acquisition Systems for Local Businesses in Mumbai</title>
				<meta
					name="description"
					content="Nuvora builds and operates the system that turns local demand into measurable customers — Google visibility, high-converting websites, ads and WhatsApp follow-up, connected end to end and tracked to revenue."
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
