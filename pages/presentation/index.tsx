import Head from "next/head";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Case Studies &amp; Work | Proven Local Acquisition Systems — Nuvora</title>
				<meta
					name="description"
					content="Explore real customer acquisition outcomes and pipeline infrastructure built for high-value local businesses in Mumbai."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heropresentation />
				<Projectspresentation />
				<Publication />
				<Ready />
			</Curve>
		</>
	);
}
