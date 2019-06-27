export default [
  {
    path: '',
    component: () => import('../layouts/Home'),
    name: 'home'
  },
  {
    component: () => import('../layouts/InteractiveResume'),
    path: '/interactive-resume',
    children: [
      {
        path: '/interactive-resume',
        component: () => import('../pages/interactiveResume/levelSelection'),
        name: 'interactiveLevelSelection'
      },
      {
        name: 'interactiveAbout',
        component: () => import('../layouts/interactiveResume/About'),
        path: '/interactive-resume/about',
        children: [
          {
            component: () => import('../pages/interactiveResume/about/levelPeresentation'),
            name: 'interactivePresentation',
            path: '/interactive-resume/about',
            props: true
          },
          {
            component: () => import('../pages/interactiveResume/about/abilities'),
            name: 'interactiveAbilities',
            path: '/interactive-resume/about/abilities',
            props: true
          },
          {
            component: () => import('../pages/interactiveResume/about/bornIn'),
            name: 'interactiveBornIn',
            path: '/interactive-resume/about/born-in',
            props: true
          },
          {
            path: '/interactive-resume/about/live-and-work',
            component: () => import('../pages/interactiveResume/about/liveAndWork'),
            props: true,
            name: 'interactiveLiveAndWork'
          },
          {
            name: 'interactiveHobbies',
            component: () => import('../pages/interactiveResume/about/hobbies'),
            path: '/interactive-resume/about/hobbies',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/interactiveResume/Skills'),
        path: '/interactive-resume/skills',
        props: true,
        children: [
          {
            component: () => import('../pages/interactiveResume/skills/levelPresentation'),
            name: 'interactiveSkillsPresentation',
            path: '/interactive-resume/skills',
            props: true
          },
          {
            component: () => import('../pages/interactiveResume/skills/frontend'),
            name: 'interactiveFrontend',
            path: '/interactive-resume/skills/frontend',
            props: true
          },
          {
            component: () => import('../pages/interactiveResume/skills/backend'),
            name: 'interactiveBackend',
            path: '/interactive-resume/skills/backend',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/interactiveResume/Experience'),
        path: '/interactive-resume/experience',
        props: true,
        children: [
          {
            component: () => import('../pages/interactiveResume/experience/levelPresentation'),
            name: 'interactiveExperiencePresentation',
            path: '/interactive-resume/experience',
            props: true
          },
          {
            component: () => import('../pages/interactiveResume/experience/Work'),
            name: 'interactiveWork',
            path: '/interactive-resume/experience/work/:section?',
            props: true
          }
        ]
      }
    ]
  },
  {
    component: () => import('../layouts/StaticResume'),
    path: '/static-resume',
    children: [
      {
        path: '/static-resume',
        component: () => import('../pages/staticResume/levelSelection'),
        name: 'levelSelection'
      },
      {
        name: 'about',
        component: () => import('../layouts/staticResume/About'),
        path: '/static-resume/about',
        children: [
          {
            component: () => import('../pages/staticResume/about/levelPeresentation'),
            name: 'presentation',
            path: '/static-resume/about',
            props: true
          },
          {
            component: () => import('../pages/staticResume/about/abilities'),
            name: 'abilities',
            path: '/static-resume/about/abilities',
            props: true
          },
          {
            component: () => import('../pages/staticResume/about/bornIn'),
            name: 'bornIn',
            path: '/static-resume/about/born-in',
            props: true
          },
          {
            path: '/static-resume/about/live-and-work',
            component: () => import('../pages/staticResume/about/liveAndWork'),
            props: true,
            name: 'liveAndWork'
          },
          {
            name: 'hobbies',
            component: () => import('../pages/staticResume/about/hobbies'),
            path: '/static-resume/about/hobbies',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/staticResume/Skills'),
        path: '/static-resume/skills',
        props: true,
        children: [
          {
            component: () => import('../pages/staticResume/skills/levelPresentation'),
            name: 'skillsPresentation',
            path: '/static-resume/skills',
            props: true
          },
          {
            component: () => import('../pages/staticResume/skills/frontend'),
            name: 'frontend',
            path: '/static-resume/skills/frontend',
            props: true
          },
          {
            component: () => import('../pages/staticResume/skills/backend'),
            name: 'backend',
            path: '/static-resume/skills/backend',
            props: true
          }
        ]
      },
      {
        component: () => import('../layouts/staticResume/Experience'),
        path: '/static-resume/experience',
        props: true,
        children: [
          {
            component: () => import('../pages/staticResume/experience/levelPresentation'),
            name: 'experiencePresentation',
            path: '/static-resume/experience',
            props: true
          },
          {
            component: () => import('../pages/staticResume/experience/Work'),
            name: 'Work',
            path: '/static-resume/experience/work/:section?',
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/blog',
    component: () => import('../layouts/Categories'),
    children: [
      {
        name: '/blogallCategories',
        component: () => import('../pages/Categories'),
        path: '/blog'
      },
      {
        component: () => import('../layouts/Category'),
        path: '/blog/categories/:id',
        props: true,
        children: [
          {
            component: () => import('../pages/Threads'),
            name: 'allThreads',
            path: '/blog/categories/:id',
            props: true
          },
          {
            path: '/blog/categories/:id/threads/:threadId',
            component: () => import('../pages/Thread'),
            props: true,
            name: 'thread'
          },
          {
            name: 'newThread',
            component: () => import('../pages/NewThread'),
            path: '/blog/categories/:id/new-thread',
            props: true
          },
          {
            name: 'newPost',
            component: () => import('../pages/NewPost'),
            path: '/blog/categories/:id/threads/:threadId/new-post',
            props: true
          }
        ]
      }
    ]
  },
  {
    component: () => import('../pages/Credits'),
    path: '/credits',
    props: true,
    name: 'Credits'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layouts/Login')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../layouts/Signup')
  }
]
