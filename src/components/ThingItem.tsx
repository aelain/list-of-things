import { type ThingProps } from '../types/ThingProps';
import recycleBin from '../assets/recycle-bin.svg';
import onRemoveThing from '../ui/onRemoveThing';

export default function ThingItem(props: ThingProps) {
  const { thing, id, removeThing } = props;
  return (
    <div className="flex gap-[10px] p-[5px] bg-[#d5eaff] rounded-[5px]">
      <div>{id}.</div>
      <div className="grow text-left">{thing}</div>
      <button
        className="p-[5px] font-[inherit] rounded-[5px] cursor-pointer"
        type="button"
        onClick={() => onRemoveThing({ id, removeThing })}
      >
        <img className="min-w-[13px]" src={recycleBin} alt="remove-thing" />
      </button>
    </div>
  );
}