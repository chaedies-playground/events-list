import React from 'react';
import { EventItem } from '../../types/Event';
import Event from './Event';
import classes from './event-list.module.css';

interface Props {
  events: EventItem[];
}

export default function EventList({ events }: Props) {
  return (
    <ul className={classes.list}>
      {events.length > 0 &&
        events.map(event => {
          const { id, title, location, date, image, description, isFeatured } = event;
          return (
            <Event
              key={event.id}
              id={id}
              title={title}
              location={location}
              image={image}
              date={date}
              description={description}
              isFeatured={isFeatured}
            />
          );
        })}
    </ul>
  );
}
