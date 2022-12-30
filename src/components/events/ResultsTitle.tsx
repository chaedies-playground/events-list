import Button from '../ui/button';
import classes from './ResultsTitle.module.css';

interface Props {
  date: Date;
}

export default function ResultsTitle({ date }: Props) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
