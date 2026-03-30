// src/components/modules/ModuleInline.tsx
'use client'
import type React from 'react'
import dynamic from 'next/dynamic'

const inlines: Record<string, Record<string, React.ComponentType>> = {
  'module-1': {
    'symptom-root':      dynamic(() => import('./inline/Inline01SymptomRoot')),
    'effort-rut':        dynamic(() => import('./inline/Inline01EffortRut')),
    'bottleneck-chain':  dynamic(() => import('./inline/Inline01BottleneckChain')),
  },
  'module-2': {
    'differentiation':   dynamic(() => import('./inline/Inline02Differentiation')),
    'expert-perception': dynamic(() => import('./inline/Inline02ExpertPerception')),
    's-curve':           dynamic(() => import('./inline/Inline02SCurve')),
  },
  'module-3': {
    'affordance':        dynamic(() => import('./inline/Inline03Affordance')),
    'feedback-loop':     dynamic(() => import('./inline/Inline03FeedbackLoop')),
    'affordance-shift':  dynamic(() => import('./inline/Inline03AffordanceShift')),
  },
  'module-4': {
    'constraint-flow':      dynamic(() => import('./inline/Inline04ConstraintFlow')),
    'three-constraints':    dynamic(() => import('./inline/Inline04ThreeConstraints')),
    'collapse-sequence':    dynamic(() => import('./inline/Inline04CollapseSequence')),
  },
  'module-5': {
    'practice-variability': dynamic(() => import('./inline/Inline05PracticeVariability')),
    'adaptive-capacity':    dynamic(() => import('./inline/Inline05AdaptiveCapacity')),
    'blocked-vs-random':    dynamic(() => import('./inline/Inline05BlockedVsRandom')),
  },
  'module-6': {
    'four-variables':    dynamic(() => import('./inline/Inline06FourVariables')),
    'the-bowl':          dynamic(() => import('./inline/Inline06TheBowl')),
    'parameter-sliders': dynamic(() => import('./inline/Inline06ParameterSliders')),
  },
  'module-7': {
    'perception-action': dynamic(() => import('./inline/Inline07PerceptionAction')),
    'fidelity-spectrum': dynamic(() => import('./inline/Inline07FidelitySpectrum')),
    'transfer-gap':      dynamic(() => import('./inline/Inline07TransferGap')),
  },
  'module-8': {
    'before-after':       dynamic(() => import('./inline/Inline08BeforeAfter')),
    'pattern-detect':     dynamic(() => import('./inline/Inline08PatternDetect')),
    'perceptual-change':  dynamic(() => import('./inline/Inline08PerceptualChange')),
  },
}

export default function ModuleInline({ slug, id }: { slug: string; id: string }) {
  const Inline = inlines[slug]?.[id]
  if (!Inline) return null
  return <Inline />
}
