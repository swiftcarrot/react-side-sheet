/** @jsx jsx */
import { jsx } from '@emotion/core';
import Dialog from '@xkit/dialog';

const SideSheet = ({ children, ...props }) => {
  return (
    <Dialog
      styles={{
        dialog: {
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: 620,
          maxWidth: 620,
          marginTop: 0,
          overflowY: 'auto',
          borderRadius: 0,
          boxShadow: 'none',
          outline: 'none'
        }
      }}
      transition={{
        from: { opacity: 0, x: 100 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: 100 },
        config: { friction: 25, tension: 250, clamp: true }
      }}
      overlayStyle={({ opacity }) => ({ opacity })}
      dialogStyle={({ x }) => ({
        transform: x.interpolate(s => `translateX(${s}%)`)
      })}
      {...props}
    >
      {children}
    </Dialog>
  );
};

export default SideSheet;
