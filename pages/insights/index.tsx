import Head from "next/head";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Heroinsights, Publicationinsights } from "@/container";

export default function Insights() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Insights | Local SEO &amp; Customer Acquisition Playbooks — Nuvora</title>
				<meta
					name="description"
					content="Actionable insights on Google Maps rankings, speed-to-lead response times, and revenue attribution for established Indian business owners."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroinsights />
				<Publicationinsights />
			</Curve>
		</>
	);
}
