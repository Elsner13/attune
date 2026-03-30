export interface ModuleSection {
  heading: string
  body: string[]
}

export interface Module {
  num: string
  slug: string
  title: string
  subtitle: string
  sections: ModuleSection[]
  theMove: string
}

export const modules: Module[] = [
  {
    num: '01',
    slug: 'module-1',
    title: 'The Wrong Problem',
    subtitle: 'Why you\'re not getting better at the rate you should',
    sections: [
      {
        heading: 'The Story You\'re Telling',
        body: [
          'You practice. You study. You put in the hours. And yet the gap between where you are and where you want to be doesn\'t seem to close the way it should.',
          'The natural conclusion is that you need more — more practice, more knowledge, more willpower. So you add. You double down. And the gap stays exactly where it is.',
          'That\'s not a discipline problem. That\'s a diagnosis problem. You\'re solving the wrong thing.',
        ],
      },
      {
        heading: 'Effort Without Direction',
        body: [
          'Most people who plateau are not lazy. They\'re working in the wrong direction with tremendous consistency.',
          'Effort compounds beautifully — but only when it\'s pointed at the right constraint. Aimed at the wrong thing, effort just deepens the rut.',
          'The first skill of skill development is figuring out what\'s actually limiting you. Not what feels limiting. Not what\'s most obvious. What\'s actually the bottleneck.',
        ],
      },
      {
        heading: 'The Diagnostic Shift',
        body: [
          'Every stuck person has a story about why they\'re stuck. That story is almost always incomplete — and often backwards.',
          'You\'re not stuck because you don\'t know enough. You\'re not stuck because you don\'t care enough. You\'re stuck because you\'re practicing a skill that is not the skill you actually need.',
          'The rest of this course is about finding the right skill and building it the right way. But none of that matters until you stop solving the wrong problem.',
        ],
      },
    ],
    theMove: 'Write down the single skill you\'re most trying to develop right now. Then ask: what would have to be true for this to already be easy? That gap — between where you are and "already easy" — is your actual problem. Write it down.',
  },
  {
    num: '02',
    slug: 'module-2',
    title: 'How Skill Actually Happens',
    subtitle: 'The mechanism underneath every expert performance',
    sections: [
      {
        heading: 'Not Information, Not Repetition',
        body: [
          'We\'ve been taught two models of skill. The first: learn the knowledge, then apply it. The second: repeat something enough times until it sticks.',
          'Neither model explains expert performance. Experts don\'t just have more information. They don\'t just have more reps. They have a different relationship with their domain — they perceive things that beginners don\'t perceive at all.',
          'Skill is fundamentally a perceptual phenomenon before it\'s a behavioral one.',
        ],
      },
      {
        heading: 'Differentiation',
        body: [
          'The core mechanism of skill development is differentiation — the ability to make finer and finer distinctions within your domain.',
          'An expert guitarist hears things in a recording that a beginner can\'t hear. An expert chef tastes things that a beginner can\'t taste. An expert investor sees things in a business that a beginner can\'t see. They\'re not just storing more information — they\'ve carved out more signal from what used to be noise.',
          'This is why novices can\'t learn from watching experts. They\'re not seeing the same thing.',
        ],
      },
      {
        heading: 'The Path Forward',
        body: [
          'If skill is perceptual, then the path forward is not more information — it\'s more differentiation. More exposure, yes, but specifically structured to force your attention onto distinctions that matter.',
          'You don\'t get this from lectures. You don\'t get it from watching videos. You get it from guided noticing — situations designed to make you see what you\'ve been missing.',
          'The rest of this course is about building those situations.',
        ],
      },
    ],
    theMove: 'Pick one area where you\'d call yourself an expert (or significantly above beginner). Spend five minutes writing what you notice in that domain that you didn\'t used to notice. Be specific. That list is what differentiation looks like in practice.',
  },
  {
    num: '03',
    slug: 'module-3',
    title: 'What Your Environment Is Doing to You',
    subtitle: 'Skill doesn\'t live inside you — it lives in the loop between you and your context',
    sections: [
      {
        heading: 'The Container Problem',
        body: [
          'We talk about skill as if it lives inside people. We say someone "has" skill, like they\'ve got it stored somewhere in their body. The conversation is always about what to add to the person.',
          'But if you watch experts carefully — especially when they\'re removed from their usual context — something strange happens. Performance drops. The surgeon who is brilliant in the OR struggles in the simulation lab. The chess prodigy who destroys opponents online loses focus in a new setting.',
          'Skill is not a possession. It\'s a relationship between a person and a context.',
        ],
      },
      {
        heading: 'Affordances',
        body: [
          'Ecologists use the word "affordance" to describe what an environment offers an organism. A tree affords climbing to a squirrel. A flat surface affords writing to a human. The affordance isn\'t in the thing or in the organism — it\'s between them.',
          'Skill works the same way. Your practice environment either affords sharp, clear skill development — or it doesn\'t. Most environments afford getting comfortable, not getting better.',
          'Comfort and growth are almost always in tension. Environments that feel good to practice in are often the exact environments that stall your development.',
        ],
      },
      {
        heading: 'Engineering vs. Hoping',
        body: [
          'You can\'t hope your way to a good environment. You have to design it.',
          'This means deliberately structuring the conditions under which you practice — not just the volume of practice, but the feedback loops, the challenge level, the cues, the stakes. Most people optimize for conditions they can sustain. Experts optimize for conditions that demand growth.',
          'The next three modules are about how to do exactly that.',
        ],
      },
    ],
    theMove: 'Look at your current primary practice environment. What does it make easy? What does it make hard? What does it make invisible? Write a paragraph describing what your environment is currently training you to do — honestly, not aspirationally.',
  },
  {
    num: '04',
    slug: 'module-4',
    title: 'The Constraints That Are Running You',
    subtitle: 'The hidden forces shaping your performance ceiling',
    sections: [
      {
        heading: 'What\'s Actually Limiting You',
        body: [
          'Every system has a bottleneck — one constraint that determines the output of the entire system. The same is true for skill development. There is one thing that is limiting your progress more than anything else right now.',
          'The problem is that this constraint is almost never what it appears to be. We address the visible difficulty, the obvious gap — and the bottleneck stays invisible, quietly running the ceiling on our growth.',
          'Constraints theory says: don\'t add capacity to non-bottleneck resources. If you\'re not working on your actual bottleneck, you\'re just building debt.',
        ],
      },
      {
        heading: 'Three Kinds of Constraints',
        body: [
          'Physical constraints are usually the most obvious — and the least common bottleneck at high skill levels. Strength, reaction time, physical capacity.',
          'Cognitive constraints are more often the real issue: attention span, working memory, decision speed, pattern recognition. These are the ones that deliberate practice is best at addressing.',
          'Perceptual constraints are the deepest: you can\'t act on what you can\'t see. Before you can solve a problem, you have to be able to perceive that it exists. Most high-level plateaus are perceptual constraints in disguise.',
        ],
      },
      {
        heading: 'Finding Yours',
        body: [
          'The test is simple: when you perform at your best, what breaks down first? What\'s the thing you always have to compensate for? What\'s the gap that never quite closes no matter how much you practice everything else?',
          'That thing — the thing that shows up consistently under pressure, in the moments that matter most — is probably your bottleneck.',
          'Once you see it clearly, you can design for it. Until then, you\'re just adding effort to a system with an unaddressed choke point.',
        ],
      },
    ],
    theMove: 'Think about your last three significant underperformances in your key skill area. What broke down first in each one? Look for the pattern. If you see the same constraint showing up more than once, you\'ve found your bottleneck. Write it down as a specific, observable thing — not "I lost focus" but "I stopped tracking the second variable when the first one became demanding."',
  },
  {
    num: '05',
    slug: 'module-5',
    title: 'Repetition Without Repetition',
    subtitle: 'Why perfect practice doesn\'t produce experts',
    sections: [
      {
        heading: 'The Myth of Perfect Reps',
        body: [
          'The conventional wisdom goes: practice the right thing, the right way, until it\'s automatic. Remove variability. Build the groove. Repeat until perfect.',
          'The problem: this produces performers who are very good in controlled conditions and brittle everywhere else. They\'ve optimized for a fixed environment that doesn\'t exist in the real world.',
          'Perfect reps are fine for building initial competence. They\'re terrible for building expertise.',
        ],
      },
      {
        heading: 'The Bernstein Insight',
        body: [
          'The Russian movement scientist Nikolai Bernstein studied skilled movement in the 1930s and discovered something strange. When experts repeat the same movement, they don\'t actually do the same thing — their underlying neuromuscular patterns vary significantly while achieving consistent outcomes.',
          'He called this "repetition without repetition." Not repetition of the same movement, but repetition of solving the same problem in varying conditions.',
          'The target of practice for an expert is not a fixed movement pattern — it\'s a flexible problem-solving capacity that can produce good outcomes across a wide range of situations.',
        ],
      },
      {
        heading: 'Variable Practice',
        body: [
          'This is why random practice schedules produce better long-term retention than blocked schedules, even though they feel harder and produce worse performance during practice.',
          'Struggle during practice is often a sign that learning is happening. Ease during practice is often a sign that you\'ve stopped learning and started performing.',
          'The question to ask of any practice session is not "how well did I do?" but "what did I have to solve?"',
        ],
      },
    ],
    theMove: 'Design one practice session for this week where you introduce systematic variability into something you normally practice in a fixed way. Change the order. Change the context. Change one key constraint. The goal is not to perform well — the goal is to solve the same problem from a different position.',
  },
  {
    num: '06',
    slug: 'module-6',
    title: 'Designing the Bowl',
    subtitle: 'How to structure conditions that demand your best',
    sections: [
      {
        heading: 'The Practice Environment as Architecture',
        body: [
          'You don\'t accidentally stumble into expert-level growth. You design for it.',
          'Think of it this way: a skate park is not just a collection of obstacles. It\'s an architecture of challenge and recovery — each element shaped to create specific demands, specific failures, specific discoveries. The bowl has a shape. The shape creates the practice.',
          'Your practice environment needs the same intentionality. You are designing the conditions that will shape who you become.',
        ],
      },
      {
        heading: 'The Four Design Variables',
        body: [
          'Challenge level: hard enough that you fail regularly, easy enough that the failure is informative. The edge of your current capacity — not so far beyond that you can\'t learn from the breakdown.',
          'Feedback loops: how quickly and clearly does the environment tell you whether you solved the problem? Tight, immediate feedback accelerates development. Slow or ambiguous feedback creates confusion.',
          'Constraint architecture: what does your practice setup make impossible? Good constraints aren\'t limitations — they\'re design choices that force you to develop specific capacities you\'d otherwise avoid.',
          'Recovery structure: how do you get back to the starting position after a failure? The path back matters as much as the challenge itself.',
        ],
      },
      {
        heading: 'Start with the Failure',
        body: [
          'The most useful design question is: where should I fail, and what should I learn from it?',
          'Most practice environments are designed to minimize failure. Expert practice environments are designed to create productive failure — the kind that reveals something specific about what needs to change.',
          'If you\'re not failing at some rate in your practice, the bowl is too flat.',
        ],
      },
    ],
    theMove: 'Pick one skill you\'re currently developing. Design a single practice session using the four variables above. Write it out before you do it. What is the challenge level? What is the feedback mechanism? What constraints will you impose? How will you recover from failure? Do the session. Debrief for five minutes afterward.',
  },
  {
    num: '07',
    slug: 'module-7',
    title: 'Representative Practice',
    subtitle: 'Closing the gap between how you practice and how you perform',
    sections: [
      {
        heading: 'The Transfer Problem',
        body: [
          'The central failure mode of most practice is this: what you do in training does not transfer to performance.',
          'You drill for hours. You simulate. You work with coaches. And then, in the moment that matters, something different happens. The skills that were solid in practice become unstable. The things you\'d rehearsed become unreliable.',
          'This is not a confidence problem. This is a representativeness problem.',
        ],
      },
      {
        heading: 'What Makes Practice Representative',
        body: [
          'Representative practice is practice that shares the key information structures of the performance environment. Not just the physical conditions, but the perceptual demands, the decision triggers, the emotional stakes, the time constraints.',
          'If your practice doesn\'t replicate what you actually have to perceive and decide in performance, you\'re building skills that are specific to practice conditions — not the conditions that matter.',
          'The goal is not to make practice feel like performance. The goal is to make practice demand the same cognitive and perceptual work as performance.',
        ],
      },
      {
        heading: 'The Constraint-Led Approach',
        body: [
          'The constraint-led approach to skill design says: don\'t give instructions, give constraints. Don\'t tell people what to do — shape the environment so that the right action emerges naturally.',
          'When you design constraints that create representative practice, skill transfers. The performer learned to read real cues, make real decisions, produce real solutions — not to replicate a demonstrated technique.',
          'This is the difference between learning "how to do X" and learning "how to solve this type of problem." The first breaks in new conditions. The second adapts.',
        ],
      },
    ],
    theMove: 'Identify the three most important perceptual cues in your domain — the things you read before you act. Now audit your current practice: does it actually require you to read those cues, or can you succeed by pattern-matching to a familiar drill? Redesign one practice activity so that those real cues are required to perform well.',
  },
  {
    num: '08',
    slug: 'module-8',
    title: 'The Perceptual Shift',
    subtitle: 'What changes when the work finally lands',
    sections: [
      {
        heading: 'The Before and After',
        body: [
          'There\'s a moment — sometimes gradual, sometimes sudden — where the thing you\'ve been working on stops being effortful and starts being obvious.',
          'Not easy. Not automatic. Obvious. You start seeing things you didn\'t used to see. Problems that used to stop you now just present themselves with their solutions attached. The ceiling you\'ve been pushing against turns out to have been a perceptual limit, not a physical one.',
          'This is what the work is building toward.',
        ],
      },
      {
        heading: 'Permanent Change vs. Temporary Performance',
        body: [
          'Most conventional practice produces temporary performance gains — you get better while you\'re doing the thing, and then it fades. This is because the practice was not changing how you see. It was changing what you do.',
          'Genuine skill development produces permanent perceptual change. Once you can see something you couldn\'t see before, you can\'t unsee it. Once the distinction is carved in, it\'s yours permanently.',
          'This is the distinction between practicing to perform and practicing to develop. The first optimizes for the next performance. The second changes what\'s possible in all future performances.',
        ],
      },
      {
        heading: 'The Practice That Remains',
        body: [
          'Everything in this course has been building toward a single conclusion: the way you practice has to change the way you perceive, or it won\'t stick.',
          'Environment design, representative constraints, variable practice, bottleneck identification — all of it serves this one purpose. Build the conditions that force new distinctions, and the distinctions will become permanent.',
          'The shift doesn\'t announce itself. You just notice one day that the problem you\'ve been working on looks different to you. That is what you\'ve been building.',
          'Trust the work. Change the conditions. The rest follows.',
        ],
      },
    ],
    theMove: 'Look back at what you wrote in Module 1 — the actual problem you identified. How does it look to you now? Write a paragraph about what\'s changed in how you see the constraint you\'re working against. Then design the next week of your practice using everything from this course: bottleneck focus, variable structure, representative constraints, environment design. This is your practice architecture.',
  },
]

export function getModule(slug: string): Module | undefined {
  return modules.find(m => m.slug === slug)
}

export function getNextModule(slug: string): Module | undefined {
  const currentIndex = modules.findIndex(m => m.slug === slug)
  if (currentIndex === -1 || currentIndex === modules.length - 1) return undefined
  return modules[currentIndex + 1]
}
