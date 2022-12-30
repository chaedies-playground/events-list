import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../data/dummy-data';

interface Props {}

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string | undefined, month: string | undefined) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}
