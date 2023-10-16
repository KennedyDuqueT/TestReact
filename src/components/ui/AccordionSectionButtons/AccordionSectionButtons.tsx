import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@/components';
import { ButtonContainer } from './AccordionSectionButtons.styles';

interface Item {
  id: number;
  title: string;
}

interface Section {
  title: string;
  items: Item[];
}

interface Data {
  id: number;
  title: string;
}

interface AccordionSectionButtonsProps {
  data: Section[];
  onClick: (item: Data) => void;
}

export const AccordionSectionButtons: FC<AccordionSectionButtonsProps> = ({ data, onClick }) => {
  return (
    <>
      {data.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <span>{section.title}</span>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonContainer>
              {section.items.map((item, itemIndex) => (
                <Button key={itemIndex} buttonType="secondary" onClick={() => onClick({ id: item.id, title: item.title })}>
                  {item.title}
                </Button>
              ))}
            </ButtonContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
