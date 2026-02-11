import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from './ui/motion-tabs'

const tabs = [
  {
    name: 'Explore',
    value: 'explore',
    content: (
      <>
        Discover <span className='text-foreground font-semibold'>fresh ideas</span>, trending topics, and hidden gems
        curated just for you. Start exploring and let your curiosity lead the way!
      </>
    )
  },
  {
    name: 'Favorites',
    value: 'favorites',
    content: (
      <>
        All your <span className='text-foreground font-semibold'>favorites</span> are saved here. Revisit articles,
        collections, and moments you love, any time you want a little inspiration.
      </>
    )
  },
  {
    name: 'Surprise Me',
    value: 'surprise',
    content: (
      <>
        <span className='text-foreground font-semibold'>Surprise!</span> Here&apos;s something unexpected—a fun fact, a
        quirky tip, or a daily challenge. Come back for a new surprise every day!
      </>
    )
  }
]

const AnimatedTabs = () => {
  return (
    <div className='w-full max-w-md'>
   

      <p className='text-muted-foreground mt-4 text-center text-xs'>
        Inspired by{' '}
        <a
          className='hover:text-foreground underline'
          href='https://animate-ui.com/docs/components/tabs'
          target='_blank'
          rel='noopener noreferrer'
        >
          Animate UI
        </a>
      </p>
    </div>
  )
}

export default AnimatedTabs
