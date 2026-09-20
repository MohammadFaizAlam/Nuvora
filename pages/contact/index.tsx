import Head from "next/head";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Herocontact, Form, FAQ, Socials } from "@/container";

export default function Contact() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Contact &amp; Free Audit | Nuvora Customer Acquisition</title>
				<meta
					name="description"
					content="Request a free diagnostic audit of your local customer acquisition pipeline. Identify where leads leak and see how a connected system fixes it."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Herocontact />
				<Form />
				<Socials />
				<FAQ />
			</Curve>
		</>
	);
}
