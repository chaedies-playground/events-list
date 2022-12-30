import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import { getFilteredEvents } from '../../data/dummy-data';

export default function FilteredDetail() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <ErrorAlert>
        <p className="center">Loading...</p>
      </ErrorAlert>
    );
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter. Please check Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ month, year });
  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
