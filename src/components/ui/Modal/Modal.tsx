// components/Modal.tsx
import React, { FC, forwardRef, ReactElement, Ref, PropsWithChildren } from 'react';
import { Box, Breakpoint, Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props: TransitionProps & { children: ReactElement<any, any> }, ref: Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ModalProps = PropsWithChildren<{
  open: boolean;
  title: string;
  maxWidth?: Breakpoint;
  handleClose: () => void;
  icon?: ReactElement;
  paddingTop?: number;
  fontSize?: number;
  keepMounted?: boolean;
}>;

export const Modal: FC<ModalProps> = ({
  open,
  title,
  handleClose,
  children,
  maxWidth = 'lg',
  icon,
  paddingTop = 16,
  fontSize = 14,
  keepMounted = true,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth={maxWidth}
      fullWidth={true}
      keepMounted={keepMounted}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '.MuiDialog-paper': { borderRadius: '2px' },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: '#00663e',
          height: 50,
          padding: 0,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" height={1} px={2.5}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ color: 'white', fontSize: { fontSize } }}>
            {icon && (
              <Box sx={{ mr: 1 }} alignItems="center" display="flex">
                {icon}
              </Box>
            )}
            {title}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              mt: -1,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ paddingTop: `${paddingTop}px` }}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};
