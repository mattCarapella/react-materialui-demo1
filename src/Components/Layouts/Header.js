import React from 'react';
import CreateDialog from '../Exercises/Dialogs/Create'
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

export default ({ muscles, onExerciseCreate }) => 
	<AppBar position="static">
	  <Toolbar>
	  	<Typography variant="headline" color="inherit" style={{flex: 1}}> 
	  		Exercise Database
	  	</Typography>

	  	<CreateDialog 
	  		muscles={muscles} 
	  		onCreate={onExerciseCreate}		// passed from App.js
	  	/>
	  </Toolbar>
	</AppBar>