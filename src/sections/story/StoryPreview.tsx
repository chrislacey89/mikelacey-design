import data from '@/../product/sections/story/data.json'
import { Story } from './components/Story'

export default function StoryPreview() {
  return (
    <Story
      timelineEvents={data.timelineEvents}
      onNavigateToWork={() => console.log('Navigate to Work section')}
      onNavigateToConnect={() => console.log('Navigate to Connect section')}
    />
  )
}
