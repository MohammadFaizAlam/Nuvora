"use client";
import { useEffect } from "react";
import Head from "next/head";
import { Curve } from "@/components";
import Legal from "@/container/legal-page/Legal";
import { privacyPage } from "@/constants/legal";

export default function Privacy() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Privacy Policy | Nuvora</title>
				<meta
					name="description"
					content="Privacy Policy for Nuvora — how we collect, use and protect information across our website and services."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Legal {...privacyPage} />
			</Curve>
		</>
	);
}
