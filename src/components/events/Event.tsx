import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { EventItem } from '../../types/Event';

interface Props {}

export default function Event({ title, image, date, location, id }: EventItem) {
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={image} alt="title" width="100px" />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
