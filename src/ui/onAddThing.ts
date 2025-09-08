import { type FormEvent } from 'react';

export default function onAddThing(event: FormEvent<HTMLFormElement>, addThing: (thing: string) => void) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  addThing(form.thing.value);
  form.reset();
}