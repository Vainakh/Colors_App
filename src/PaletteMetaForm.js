import React, {useState} from 'react';
import { Picker } from 'emoji-mart';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'emoji-mart/css/emoji-mart.css';

function PaletteMetaForm(props) {
  const [stage, setStage] = useState('');
  const handleClickOpen = () => {
    setStage('form');
  };
  const handleCancel = () => {
    setStage('');
  }
  const showEmojiPicker = (event) => {
    event.preventDefault();
    setStage('emoji');
  };
  const savePalette = (emoji) => {
    props.handleSubmit({
      paletteName: props.newPaletteName,
      emoji: emoji.native
    });
  };

  return (
    <div>
    <Dialog
      onClose={handleCancel}
      open={stage === 'emoji'}
      >
      <DialogTitle id="form-dialog-title">
          Choose a Palette Emoji
        </DialogTitle>

      <Picker
        title="Pick a Palette Emoji"
        onSelect={savePalette}
      />
    </Dialog>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}>
        SAVE
      </Button>
      <Dialog
        open={stage === 'form'}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">
          Choose a Palette Name
        </DialogTitle>
        <form onSubmit={showEmojiPicker}>
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
                onClick={handleCancel}
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