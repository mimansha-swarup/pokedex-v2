import { Avatar, Stack, Typography, BottomNavigation,BottomNavigationAction } from '@mui/material';
import {
	kantoMap, 
	jhotoMap,
	hoennMap,
	sinnohMap,
	unnovaMap,
	kalosMap,
	alolaMap,
	galarMap 
} from "../assets/index"
import PokeStore from '../state_management/poke_store';
import localPalette from '../theme/palette';
import {useState} from "react"

const GenerationBar = () => {
	const gen =[
		{
			name: "Kanto",
			image: kantoMap,
			start:1,
			end:151,
		},
		{
			name: "Jhoto",
			image: jhotoMap,
			start:152,
			end:251,
		},
		{
			name: "Hoenn",
			image: hoennMap,
			start:252,
			end:386,
		},
		
		{
			name: "Sinnoh",
			image: sinnohMap,
			start:387,
			end:493,
		},
		{
			name: "Unnova",
			image: unnovaMap,
			start:494,
			end:649,
		},
		{
			name: "Kalos",
			image: kalosMap,
			start:650,
			end:721,
		},
		{
			name: "Alola",
			image: alolaMap,
			start:722,
			end:809,
		},
		{
			name: "Galar",
			image: galarMap,
			start:810,
			end:898,
		},
	]
	const [value, setValue] = useState(PokeStore.gen);
	
	const activeRegion ={
		color:localPalette.secondary,
		order:1,
		fontWeight:700,
	}

  const handleChange = ( selectedGen) => {
	  if(selectedGen.name === PokeStore.gen){
		  console.log ("stupid guy")
		  return
	  }
    setValue(selectedGen.name);
	PokeStore.gen = selectedGen.name;
    console.log(selectedGen);
  };
	return ( 
		
		<Stack direction="row"  gap={6}  alignItems={"center"}  sx={{my:"2rem",p:1,overflowY:"auto"}}  >
			{
				gen.map(
					(region,i) =>(
						// ()=>PokeStore.loadRegionalPokemons(region.start,region.end)
						<Stack key={i} sx={value === region.name ? {...activeRegion} :{order:2}} onClick={()=>handleChange(region)}  alignItems="center" justifyContent="center" >
							<Avatar sx={{ width: 95, height: 95 }} src={region.image}   />
							<Typography color={value === region.name? activeRegion.color : localPalette.grey["500"] } variant='subtitle1'>{region.name}</Typography>
						</Stack>
					)
				)
			}	
		</Stack>
		);
}
 
export default GenerationBar;
// <BottomNavigation 
		// 	sx={{ 
		// 		height:"fit-content", 
		// 		my:"2rem",
		// 		p:1,
		// 		overflowY:"auto"
		// 	}} 
		// 	value={value} 
		// 	onChange={handleChange}
		// >	
		// 	{
		// 		gen.map(
		// 			(region,i) =>(					
		// 				<BottomNavigationAction
		// 					sx={{width:100,display:"flex",justifyContent:"flex-start", }}
		// 					color={localPalette.secondary}
		// 					showLabel
							
		// 					label={region.name}
		// 					value={region.name}
		// 					icon={
		// 						<Avatar sx={{ width: 75, height: 75 , mx:2 }} src={region.image}   />
		// 					}
		// 				/>
		// 			)
		// 		)
		// 	}	
			
		// </BottomNavigation>