export interface VideoMp4 {
  url: string
}

export interface BaseProject {
  title: string
  year: string
  stack: string
  role: string
  url: string
}

export interface Project extends BaseProject {
  _id: string
  videoMp4: VideoMp4
}

export interface ItemProps extends BaseProject {
  id: string
  height: number | 'auto'
  onToggle: (id: string) => void
  video: string
}

export interface ListProps {
  items: ItemProps[]
}
