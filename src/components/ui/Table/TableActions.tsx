import React, { FC } from 'react';
import { Box, IconButton, IconProps, Tooltip } from '@mui/material';

export interface TableAction {
  tooltip: string;
  icon: JSX.Element;
  iconProps?: IconProps;
  onClick: (id: number) => void;
}

interface Props {
  rowId: number;
  actions: TableAction[];
  disabled?: boolean;
}

export const TableActions: FC<Props> = ({ actions, disabled, rowId }) => {
  return (
    <Box display="flex">
      {actions.map((action, index) => (
        <IconButton key={`${index}-${action.tooltip}`} disabled={disabled} onClick={() => action.onClick(rowId)}>
          <Tooltip title={action.tooltip} arrow>
            {action.icon}
          </Tooltip>
        </IconButton>
      ))}
    </Box>
  );
};
