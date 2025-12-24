import data from '@/../product/sections/work/data.json'
import { Work } from './components/Work'

export default function WorkPreview() {
  return (
    <Work
      credits={data.credits}
      photos={data.photos}
      interviews={data.interviews}
      onPhotoClick={(id) => console.log('Photo clicked:', id)}
      onNavigateToConnect={() => console.log('Navigate to Connect section')}
    />
  )
}
