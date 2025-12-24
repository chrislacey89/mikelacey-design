import data from '@/../product/sections/kudos/data.json'
import { Kudos } from './components/Kudos'

export default function KudosPreview() {
  return (
    <Kudos
      testimonials={data.testimonials}
      onDocumentClick={(id) => console.log('Document clicked:', id)}
      onNavigateToConnect={() => console.log('Navigate to Connect section')}
    />
  )
}
