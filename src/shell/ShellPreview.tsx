import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Home', href: '/', isActive: true },
    { label: 'Story', href: '/story' },
    { label: 'Work', href: '/work' },
    { label: 'Kudos', href: '/kudos' },
    { label: 'Connect', href: '/connect' },
  ]

  return (
    <AppShell
      navigationItems={navigationItems}
      brandName="Mike Lacey"
      onNavigate={(href) => console.log('Navigate to:', href)}
    >
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
          Content Area
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Section content will render here. Each section (Home, Story, Work,
          Kudos, Connect) will have its own screen design that displays in this
          area.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-6 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
            <h2 className="font-medium text-stone-900 dark:text-stone-100 mb-2">
              Navigation
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Top nav with hamburger menu on mobile. Blue highlights for active
              state.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
            <h2 className="font-medium text-stone-900 dark:text-stone-100 mb-2">
              Responsive
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Resize the window to see the mobile menu. Works across all
              breakpoints.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
