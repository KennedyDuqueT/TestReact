import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { AntTabs, AntTab, childrenContainer, childrenContainerClear, tabTitle } from './Tabs.styles';
import { useTheme } from '@/context';

interface TabData {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabData[];
  clearTabs?: number[];
  validationNextTab?: () => boolean;
  tabVariant?: 'scrollable' | 'fullWidth' | 'standard';
}

export const Tabs: FC<TabsProps> = ({ tabs, clearTabs = [], validationNextTab, tabVariant = 'standard' }) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (validationNextTab && !validationNextTab()) {
      return;
    }
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ backgroundColor: theme.currentTheme.palette.background.default }}>
        <AntTabs variant={tabVariant} value={value} onChange={handleChange} aria-label="ant example">
          {tabs.map((tab, index) => (
            <AntTab key={index} label={<div style={tabTitle}>{tab.label}</div>} />
          ))}
        </AntTabs>
        <Box sx={clearTabs.includes(value) ? childrenContainerClear : childrenContainer}>{tabs[value] && tabs[value].content}</Box>
      </Box>
    </Box>
  );
};
