"use client"

import { useRef, useEffect } from 'react'
import Image from "next/image"
import bgEdgeSrc from "@/public/bg-edge.svg"

export const BgEdge = () => {
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const onScroll = () => {
			if (imgRef.current) {
				const scrolled = window.scrollY
				imgRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`
			}
		}

		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<Image
			ref={imgRef}
			id="bgEdge"
			src={bgEdgeSrc}
			alt="Bg Edge Design"
			style={{ willChange: 'transform' }}
		/>
	)
}