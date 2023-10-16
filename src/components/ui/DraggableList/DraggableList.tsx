import React, { useEffect, FC } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ButtonIcon } from '@/components';
import CancelIcon from '@mui/icons-material/Cancel';

interface ListItem {
  id: number;
  title: string;
  order: number;
}

interface DraggableListProps {
  items: ListItem[];
  onReorder: (id: number, newPosition: number) => void;
  onRemove: (id: number) => void;
}

const reorder = (list: ListItem[], startIndex: number, endIndex: number): ListItem[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const DraggableList: FC<DraggableListProps> = ({ items, onReorder, onRemove }) => {
  const [orderedItems, setOrderedItems] = React.useState<ListItem[]>([]);

  useEffect(() => {
    setOrderedItems([...items].sort((a, b) => a.order - b.order));
  }, [items]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newOrderedItems = reorder(orderedItems, result.source.index, result.destination.index);

    setOrderedItems(newOrderedItems);

    const reorderedItem = newOrderedItems.find((item) => item.id === Number(result.draggableId));
    if (reorderedItem) {
      onReorder(reorderedItem.id, newOrderedItems.indexOf(reorderedItem) + 1);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {orderedItems.map((item, index) => (
              <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                {(provided) => (
                  <ListItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{ backgroundColor: index % 2 === 0 ? 'common.draggableListOdds' : 'common.draggableListEvens' }}
                  >
                    <ListItemText primary={item.title} />
                    <ButtonIcon IconComponent={CancelIcon} onClick={() => onRemove(item.id)} />
                  </ListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};
