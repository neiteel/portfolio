import { ListProps, ItemProps } from '@/types'
import { useState } from 'react'
import ListItem from './ListItem'

function List({ items }: ListProps) {
  const [itemStates, setItemStates] = useState<ItemProps[]>(
    items.map((item) => ({ ...item, height: 0 })),
  )

  const handleToggle = (id: string) => {
    setItemStates((prevStates) =>
      prevStates.map((item) =>
        item.id === id
          ? { ...item, height: item.height === 0 ? 'auto' : 0 }
          : { ...item, height: 0 },
      ),
    )
  }

  return (
    <div className="text-white">
      <div
        className="relative flex w-full justify-between gap-1 py-4 text-left"
        style={{
          fontSize: `calc(var(--title-size) * 0.75)`,
        }}
      >
        <div className="uppercase">Works</div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gray-200"></div>
      </div>
      {itemStates.map((item: ItemProps) => (
        <ListItem key={item.id} {...item} onToggle={handleToggle} />
      ))}
    </div>
  )
}

export default List
