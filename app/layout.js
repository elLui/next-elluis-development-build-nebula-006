"use client"
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import BackgroundVideo from "@/components/background/background";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/styles/globals";
import Script from "next/script";




export const metadata = {
	title : 'elluis.codes', description : 'Generated by create next app', // https://fonts.adobe.com/my_fonts#web_projects-section
	link : "https://use.typekit.net/ptz3vfb.css",

}

export default function RootLayout( { children } ) {
	return (

		<html lang="en">
		<body>
		<GlobalStyle/>
		<StyledComponentsRegistry>
			<BackgroundVideo/>
			{ children }
		</StyledComponentsRegistry>
		</body>
		</html>

	)
}
