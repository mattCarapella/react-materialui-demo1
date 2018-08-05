import React, { Component, Fragment } from 'react'
import { 
	Button, 
	Dialog, 
	TextField,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {

	state = {
		open: false
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open 
		})
	}

	render() {
		const { open } = this.state 
		return <Fragment>
			<Button variant="fab" onClick={this.handleToggle} mini>
				<AddIcon/>
			</Button>

			<Dialog
	      open={this.state.open}
	      onClose={this.handleToggle}
	    >
	      <DialogTitle id="form-dialog-title">
	      	Enter a new exercise.
	      </DialogTitle>
	      
	      <DialogContent>
	        <DialogContentText>
	         	Please fill out the form below.
	        </DialogContentText>

	       	<form>
					
					</form>

	      </DialogContent>

	      <DialogActions>
	        <Button color="primary" variant="raised">
	          Create
	        </Button>

	      </DialogActions>   
	    </Dialog>
	  </Fragment >
	}
}	
	


