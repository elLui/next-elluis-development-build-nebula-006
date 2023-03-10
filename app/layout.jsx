"use client"
import theme from "@/vendor/mui/theme/default-theme";
import React from 'react';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';

import BackgroundVideo from '@/components/background/background';
import NavMenu from '@/components/navmenu/navmenu';
import GlobalStyle from '@/styles/globals';
import StyledComponentsRegistry from '@/lib/registry';




const metadata = {
	title : 'elluis.codes',
	description : 'Generated by create next app',
	lang : 'en-US',
	meta : [ { charset : 'utf-8' }, {
		name : 'viewport',
		content : 'width=device-width, initial-scale=1'
	}, { hid : 'description', name : 'description', content : 'Generated by create next app' }, ],
	link : 'https://use.typekit.net/ptz3vfb.css',
};

const LayoutBody = styled.body`
  :root {
    flex-grow: 1;
  }

  header {
    margin-bottom: ${ theme.spacing( 2 ) }; // access spacing property directly
  }

  .navMenu {
    margin-bottom: ${ theme.spacing( 2 ) };
  }

  .homePage {
    margin-bottom: ${ theme.spacing( 2 ) };
  }

  footer {
    margin-top: ${ theme.spacing( 2 ) };
  }
`;

export default function RootLayout( { children } ) {
	return ( <html lang="en">
	<LayoutBody>
		<Grid container>
			{/* BackgroundVideo z-index: -10 */ }
			<BackgroundVideo/>
			<GlobalStyle/>
			<ThemeProvider theme={ theme }>
				<NavMenu/>
				<StyledComponentsRegistry>
					{ children }
				</StyledComponentsRegistry>
			</ThemeProvider>
		</Grid>
	</LayoutBody>
	</html> );
}