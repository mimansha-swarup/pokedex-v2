import {  Box, Button, Card,  Typography } from '@mui/material';

import localPalette from '../theme/palette';
const PokeCards = ({pokemon}) => {
	const { name, } =pokemon
	const desc = pokemon["flavor_text_entries"][0]["flavor_text"]
	const pImg = pokemon.sprites.other["official-artwork"]["front_default"]
	const gen = pokemon.generation.name.split("-").join(" ")
	const bgType = pokemon.types[0].type.name

	return ( 
		<Card sx={{ display: 'flex',p:2, border:`1px solid ${localPalette.grey[200]}`, borderRadius:".752rem" }}>
			
			<Box sx={{borderRadius:".5rem",display: 'flex' ,background:localPalette.typeBg[bgType]}} >
				<img style={{height:"142px",width:"117px",objectFit:"contain"}} src={pImg} alt="" />
			</Box>
			
			<Box sx={{p:0,pl:2,height:"142px",display: 'flex',flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}}>
			<Typography  component="div" variant="h6">
				{name}
			</Typography>
			<Typography sx={{height:"59px",width:'100%', maxWidth:"161px" , p:0, overflow:"hidden", whiteSpace:"nopwrap" ,textOverflow:"..."}} color={localPalette.grey["500"]} component="div" variant="body2">
			{desc.replace(""," ")}
			</Typography>
			<Button variant="contained" sx={{py:".2rem",background:localPalette.secondary, fontSize:".65rem" }} color="error" size='small' >
				{gen}
			</Button>
			
			</Box>   
		</Card>
			
	);
}
 
export default PokeCards;