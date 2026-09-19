"use client";
import { useEffect } from "react";
import Head from "next/head";
import { Curve } from "@/components";
import Legal from "@/container/legal-page/Legal";
import { termsPage } from "@/constants/legal";

export default function Terms() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Head>
				<title>Terms &amp; Conditions | Nuvora</title>
				<meta
					name="description"
					content="Terms & Conditions for Nuvora — a digital marketing and web development agency serving small and medium businesses across India."
				/>
			</Head>
			<Curve backgroundColor={"#f1f1f1"}>
				<Legal {...termsPage} />
			</Curve>
		</>
	);
}
