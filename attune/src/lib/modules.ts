export const modules = [
  { num: '01', slug: 'module-1', title: 'The Wrong Problem' },
  { num: '02', slug: 'module-2', title: 'How Skill Actually Happens' },
  { num: '03', slug: 'module-3', title: 'What Your Environment Is Doing to You' },
  { num: '04', slug: 'module-4', title: 'The Constraints That Are Running You' },
  { num: '05', slug: 'module-5', title: 'Repetition Without Repetition' },
  { num: '06', slug: 'module-6', title: 'Designing the Bowl' },
  { num: '07', slug: 'module-7', title: 'Representative Practice' },
  { num: '08', slug: 'module-8', title: 'The Perceptual Shift' },
]

export function getModule(slug: string) {
  return modules.find(m => m.slug === slug)
}

export function getNextModule(slug: string) {
  const currentIndex = modules.findIndex(m => m.slug === slug)
  if (currentIndex === -1 || currentIndex === modules.length - 1) return null
  return modules[currentIndex + 1]
}
