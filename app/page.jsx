"use client"
import Hero from "@/components/hero/hero";
import FeaturedPosts from "@/components/featured-posts/featured-posts";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from "styled-components";

const HomeMain = styled.main`


	
	

`;


const inter = Inter( { subsets : [ 'latin' ] } )

export default function Home() {
	return (

		<main>
			<Hero/>
			<FeaturedPosts/>
		</main>

	)
}
