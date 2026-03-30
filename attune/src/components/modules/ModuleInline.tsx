// src/components/modules/ModuleInline.tsx
'use client'
import type React from 'react'
import dynamic from 'next/dynamic'

const inlines: Record<string, Record<string, React.ComponentType>> = {
  'module-1': { 'symptom-root': dynamic(() => import('./inline/Inline01SymptomRoot')) },
  'module-2': { 'differentiation': dynamic(() => import('./inline/Inline02Differentiation')) },
  'module-3': { 'affordance': dynamic(() => import('./inline/Inline03Affordance')) },
  'module-4': { 'constraint-flow': dynamic(() => import('./inline/Inline04ConstraintFlow')) },
  'module-5': { 'practice-variability': dynamic(() => import('./inline/Inline05PracticeVariability')) },
  'module-6': { 'four-variables': dynamic(() => import('./inline/Inline06FourVariables')) },
  'module-7': { 'perception-action': dynamic(() => import('./inline/Inline07PerceptionAction')) },
  'module-8': { 'before-after': dynamic(() => import('./inline/Inline08BeforeAfter')) },
}

export default function ModuleInline({ slug, id }: { slug: string; id: string }) {
  const Inline = inlines[slug]?.[id]
  if (!Inline) return null
  return <Inline />
}
