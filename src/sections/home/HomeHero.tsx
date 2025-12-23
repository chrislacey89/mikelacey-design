import data from '@/../product/sections/home/data.json'
import { HomeHero } from './components/HomeHero'

export default function HomeHeroPreview() {
  return (
    <HomeHero
      hero={data.hero}
      profile={data.profile}
      ctas={data.ctas}
      onNavigate={(href) => console.log('Navigate to:', href)}
    />
  )
}
