import { ItemProps } from '@/types'
import { useRef } from 'react'
import AnimateHeight from 'react-animate-height'
import { MdAdd, MdRemove } from 'react-icons/md'
import { VscLoading } from 'react-icons/vsc'

const ListItem = ({
  id,
  height,
  onToggle,
  title,
  role,
  year,
  stack,
  url,
  video,
}: ItemProps) => {
  const blockRef = useRef<HTMLDivElement>(null)

  const handleAnimationEnd = () => {
    if (height !== 0 && blockRef.current) {
      blockRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="relative" ref={blockRef}>
      <button
        className="relative w-full"
        aria-expanded={height !== 0}
        aria-controls={`block-${id}`}
        onClick={() => onToggle(id)}
      >
        <div
          className="flex w-full justify-between gap-1 py-4 text-left"
          style={{
            fontSize: `calc(var(--title-size) * 0.75)`,
          }}
        >
          <div>{title}</div>
          <div className="flex items-center">
            {height === 0 ? <MdAdd /> : <MdRemove />}
          </div>
        </div>
      </button>

      <AnimateHeight
        onHeightAnimationEnd={handleAnimationEnd}
        id={`block-${id}`}
        duration={400}
        height={height}
      >
        <div className="space-y-16 pb-20 sm:space-y-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="space-y-2 sm:space-y-4">
              <div className="text-gray-400">ROLE</div>
              <div>{role}</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-gray-400">TECH STACK</div>
              <div>{stack}</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-gray-400">YEAR</div>
              <div>{year}</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-gray-400">URL</div>
              <div className="">
                {url ? <a href={url}>View Site ↗</a> : 'Offline'}
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[2vh] sm:rounded-[4vh]">
            <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
              <VscLoading className="animate-spin" size="32" />
            </div>
            {height !== 0 && (
              <video
                className="relative aspect-video w-full rounded-[2vh] sm:rounded-[4vh]"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source type="video/mp4" src={video} />
                {/* Sorry, your browser doesn't support embedded videos. */}
              </video>
            )}
          </div>
        </div>
      </AnimateHeight>
      <div className="absolute inset-x-0 h-px w-full bg-gray-200"></div>
    </div>
  )
}

export default ListItem
