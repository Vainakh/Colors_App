import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function PaletteMetaForm(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Choose a Palette Name
        </DialogTitle>
        <form onSubmit={props.handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette
          </DialogContentText>
            <input
              label="New Palette Name"
              value={props.newPaletteName}
              name="newPaletteName"
              onChange={props.handlePaletteChange}
              fullWidth
              margin='normal'
              // validator={["required"]}
              // errorMessages={["Enter Palette Name"]}
              />

            </DialogContent>
          <DialogActions>
          <Button
                variant='contained'
                color='primary'
                type='submit'
                >
                Save Palette
              </Button>
              <Button
                onClick={handleClose}
                color="primary">
                Cancel
              </Button>
          </DialogActions>

        </form>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm;