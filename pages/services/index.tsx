"use client";
import {
	Capibilyties,
	Clientsservices,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import Head from "next/head";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Services | Connected Customer Acquisition Infrastructure — Nuvora</title>
				<meta
					name="description"
					content="Discover, Convert, Acquire, Respond, Measure. Nuvora operates the complete acquisition engine for clinics, high-value home services, and interior studios in Mumbai."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroservices />
				<Process />
				<Capibilyties />
				<Clientsservices />
				<Archive />
				<Expectations />
				<Ready />
			</Curve>
		</>
	);
}
