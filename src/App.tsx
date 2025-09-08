import { useState } from 'react';
import ThingItem from './components/ThingItem';
import AddingThing from './components/AddingThing';
import { getThings, saveThings } from './utils/savingState';

export default function App() {
  const [things, setThings] = useState(getThings() || ['Куртка', 'Кроссовки', 'Рюкзак']);

  const addThing = (newThing: string) => {
    setThings(things => [...things, newThing]);
  };

  const removeThing = (index: number) => {
    setThings(things => [...things.slice(0, index), ...things.slice(index + 1, things.length)]);
  };

  saveThings(things);

  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="font-bold text-[24px] text-center">Список вещей</h1>
      <div className="flex flex-col gap-[5px]">
        {things.map((thing: string, index: number) => {
          return (
            <ThingItem thing={thing} id={index + 1} removeThing={removeThing} key={index + 1} />
          );
        })}
      </div>
      <AddingThing addThing={addThing} />
    </div>
  )
}