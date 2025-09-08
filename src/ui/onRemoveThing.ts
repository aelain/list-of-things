import type { RemovingProps } from '../types/RemovingProps';

export default function onRemoveThing({ id, removeThing }: RemovingProps) {
  removeThing(id - 1);
}