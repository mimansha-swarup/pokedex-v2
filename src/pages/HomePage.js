import { Avatar, Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import ScrollToTop from '../components/ScrollToTop';
import localPalette from '../theme/palette';
import GenerationBar from '../layouts/Genereation';
import PokeCards from '../components/PokeCards';
import { useEffect, useState } from 'react';
import { useObserver } from "mobx-react";
import PokeStore from '../state_management/poke_store';

import '../Home.css';

const HomePage = () => {

	useEffect(() => {
    if (PokeStore.loadRegionalPokemons.length<1) {
      PokeStore.loadRegionalPokemons(1,151)      
    }
    
  }, [])


	return useObserver(() =>( 
		<div style={{overflow:"hidden",color:localPalette.common.black}}>
			{/* <ScrollToTop/> */}
			<Container sx={{px:"2rem",my:"3rem",overflow:'hidden'}} >
				
				<Typography variant='h4' fontWeight="700"  color={localPalette.secondary}>Pokémon</Typography>
				<Typography variant='subtitle1'   color={localPalette.grey["500"]}>gotcha catch ém all </Typography>
				
				<GenerationBar/>

				<Stack direction="row"  alignItems="center" justifyContent="space-between" mb={3}>
				<Typography variant='body1' fontWeight="700" >
					Pokemons
				</Typography>
				<Typography variant='body2'>
					see more
				</Typography>
				</Stack>

				<Stack py={3} direction="row" gap={4}  flexWrap="wrap" alignItems="center" justifyContent="center" >

					{
						PokeStore.loading ? (
							<img style={{height:"200px", width:"200px"}} src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" alt="" className="loader" />

						) : 
							PokeStore.RenderPokemonDetailsList.map(
								(pokeData,i) => (<PokeCards key={i} pokemon={pokeData} />)       
							)
						
					}
				</Stack>
				
			</Container>
			
		</div>
	));
}
 
export default HomePage;