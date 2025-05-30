"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useCurrent } from "@/features/auth/api/use-current";

export default function Home() {
	const router = useRouter();
	const { data, isLoading } = useCurrent();

	useEffect(() => {
		if (!data && !isLoading) {
			router.push("/sign-in");
		}
	}, [data]);
	return (
		<div>
			Only visible to authenticated users.
		</div>
	);
}
