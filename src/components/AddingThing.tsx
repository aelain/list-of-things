import type { AddingProps } from '../types/AddingProps';
import onAddThing from '../ui/onAddThing';

export default function AddingThing(props: AddingProps) {
  const { addThing } = props;

  return (
    <form className="flex flex-col gap-[10px]" onSubmit={event => onAddThing(event, addThing)}>
      <label className="text-[20px]" htmlFor="new-thing-input">Новая вещь:</label>

      <input
        className="p-[5px] border-[1px] border-[#d7d7d7] border-solid focus-visible:outline-[1px] focus-visible:outline-[#d7d7d7] rounded-[5px]"
        type="text"
        id="new-thing-input"
        name="thing"
        placeholder="Например, футболка"
        required
      />

      <button
        className="self-center px-[40px] py-[10px] font-[inherit] font-bold text-[#ffffff] bg-[#005591] rounded-[8px] cursor-pointer"
        type="submit">
        Добавить
      </button>
    </form>
  );
}