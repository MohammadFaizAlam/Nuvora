"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import Head from "next/head";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Case Study: Apex Dental &amp; Implant Centre | Nuvora Acquisition Systems</title>
				<meta
					name="description"
					content="How Apex Dental &amp; Implant Centre generated a 310% increase in patient bookings and sub-90-second speed-to-lead using Nuvora's customer acquisition infrastructure."
				/>
			</Head>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz />
				<Aboutworkiz />
				<Chelenge />
				<VideoWorkiz />
				<Result />
				<Credit />
				<Works />
				<Ready />
			</Curve>
		</>
	);
}
