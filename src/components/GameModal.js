import React from 'react';
import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import { removeHtmlTagsFromText } from '../helpers/utils';

function GameModal({open, handleOpen, activeCardInfo}) {
  const {name, description} = activeCardInfo

  const validatedDescriptionStr = description && removeHtmlTagsFromText(description)
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={handleOpen}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Sheet
        variant="none"
        sx={{
          maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg'
        }}
      >
        <ModalClose
          variant="outlined"
          sx={{
            top: 'calc(-1/4 * var(--IconButton-size))',
            right: 'calc(-1/4 * var(--IconButton-size))',
            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
            borderRadius: '50%',
            bgcolor: 'background.body'
          }}
        />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {name}
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          {validatedDescriptionStr}
        </Typography>
      </Sheet>
    </Modal>
  );
}

export default GameModal;
