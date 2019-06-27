export default ({ props }: any) => {
  const getFeatures = (projectFeatures) => {
    const features: any[] = []
    projectFeatures.map((feature, index) => {
      features.push(
        <li class={`feature f-${index}`}>
          {feature}
        </li>
      )
    })
    return features
  }
  const getProjects = (workProjects) => {
    const projects: any[] = []
    workProjects.map((project, index) => {
      const projectFeatures: any = project.features && project.features.length > 0 ? getFeatures(project.features) : null
      projects.push(
        <li class={`project p-${index}`}>
          <h3>
            <a href={project.url}>{project.name}</a>
            {projectFeatures && (
              <i  onclick={() => props.openDropdown(project.name)} class={props.activeDropdowns[project.name] ? `fas fa-angle-up` : 'fas fa-angle-down'} />
            )}
          </h3>
          { projectFeatures && (
            <ul class={`features ${props.activeDropdowns[project.name] && 'opened'}`}>
              {projectFeatures}
            </ul>
            )
          }
        </li>
      )
    })
    return projects
  }
  const getJobs = (workJobs, org) => {
    const jobs: any[] = []
    const organization = org.toLowerCase().replace(/ /g, '-').replace(/[,.]/g, '')
    workJobs.map((job, index) => {
      const jobProjects: any = job.projects && job.projects.length > 0 ? getProjects(job.projects) : null
      jobs.push(
        <li class={`job j-${index} ${props.section === organization  ? 'show' : 'hide'}`}>
          <h3>{job.url ? (<a href={job.url}>{job.description}</a>) : job.description}</h3>
          { jobProjects && (
            <ul class='projects'>
              {jobProjects}
            </ul>
          )}
        </li>
      )
    })
    return jobs
  }
  const getWorks = (works) => {
    const worksArray: any[] = []

    if (works && works.length > 0) {
      works.map((work, index) => {
        const jobs: any = work.jobs && work.jobs.length > 0 ? getJobs(work.jobs, work.organization) : null
        worksArray.push(
          <article class={`experience exp-${index}`}>
            <div
              class='experience-title'
              onmouseenter={() => props.showDescription(work.organization)}
              onmouseleave={() => props.showDescription(work.organization)}
            >
              <h2>
                {work.organization}
                <p>{work.from} - {work.to}</p>
              </h2>
              <span class={props.activeHovers[work.organization] && 'opened'}>{work.description}</span>
            </div>
            { jobs && (
              <ul class='jobs'>
                {jobs}
              </ul>
              )
            }
          </article>
        )
      })
    }
    return worksArray
  }

  return (
    <main class='section'>
      <section class='parallax-background -experience'>
        <section class='background background-1' ref='movingBg1'>
          <article class='divisions d-1'>
            <div class='lava-container'>
              <span class='background-element -lava-fall child-0' />
              <span class='background-element -lava-fall child-1' />
              <span class='background-element -lava-fall child-2' />
              <span class='background-element -lava-fall child-3' />
              <span class='background-element -lava-fall child-4' />
              <span class='background-element -lava-fall child-5' />
              <span class='background-element -lava-fall child-6' />
              <span class='background-element -lava-fall child-7' />
              <span class='background-element -lava-fall child-8' />
            </div>
            <span class='background-element -lava l-1'>
              <h1 class='game-title -cartel -experience'>Work Experience</h1>
            </span>
          </article>
          <article class='divisions'>
            <span class='background-element -lava l-2'/>
            <span class='background-element -waterfall child-0' />
            <span class='background-element -waterfall child-1' />
            <span class='background-element -waterfall child-2' />
            <span class='background-element -waterfall child-3' />
            <span class='background-element -waterfall child-4' />
            <span class='background-element -waterfall child-5' />
            <span class='background-element -waterfall child-6' />
            <span class='background-element -waterfall child-7' />
            <span class='background-element -waterfall child-8' />
            <span class='background-element -waterfall child-9' />
            <span class='background-element -water' />
          </article>
          <article class='divisions'>
            <span class='background-element -torch t-1' />
          </article>
          <article class='divisions'>
            <span class='background-element -torch t-2' />
            <span class='background-element -torch t-3' />
          </article>
        </section>
        <section class='layerBottom' ref='movingBg'>
          <span ref='character' class={`character -experience ${props.credits && 'goToCredits'}`} />
          <button class='exp-btn b-1' onClick={() => props.moveBackground(-100, 'experienceTwoNext', props.works[1].organization)}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-2' onClick={() => props.moveBackground(0, 'experienceOnePrev', props.works[0].organization)}>
            <i class='fas fa-angle-left'></i>
          </button>
          <button class='exp-btn b-3' onClick={() => props.moveBackground(-200, 'experienceThreeNext', props.works[2].organization)}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-4' onClick={() => props.moveBackground(-100, 'experienceTwoPrev', props.works[1].organization)}>
            <i class='fas fa-angle-left'></i>
          </button>
          <button class='exp-btn b-5' onClick={() => props.moveBackground(-300, 'experienceFourNext', props.works[3].organization)}>
            <i class='fas fa-angle-right'></i>
          </button>
          <button class='exp-btn b-6' onClick={() => props.moveBackground(-200, 'experienceThreePrev', props.works[2].organization)}>
            <i class='fas fa-angle-left'></i>
          </button>
          {getWorks(props.works)}
        </section>
      </section>
      <section class='user-panel'>
        <a onClick={() => props.router.push('/static-resume/skills/backend')} class='button -prev'>
          <i class='fas fa-angle-left' />
          Level 2.2
        </a>
        <a onClick={() => props.goToCredits()} class='button -next'>
          Credits
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
