import Hero from "@/components/hero/hero";
import FeaturedPosts from "@/components/featured-posts/featured-posts";
import Image from 'next/image'
import { Inter } from 'next/font/google'






const inter = Inter( { subsets : [ 'latin' ] } )

export default function Home() {
	return (
		<main>
			<Hero />
			<FeaturedPosts/>
		</main>
	)
}
