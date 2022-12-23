import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../data/dummy-data';
import { EventItem } from '../../types/Event';

interface Props {}

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId as string;
  const event = getEventById(eventId);

  if (!event) {
    return <p>no event found!</p>;
  }

  const { date, location, image, title, description } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}
