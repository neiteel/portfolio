import SocialLinks from './SocialLinks'

function Hero() {
  return (
    <section className="grid h-screen min-h-[100dvh] grid-cols-1 grid-rows-3 gap-4 text-white sm:grid-rows-4 sm:text-xl">
      <h1 className="-mx-2 text-base leading-none sm:row-span-2 xl:-mx-4">
        <span className="c-text-fit">
          <span>
            <span className="c-text-fit">
              <span>
                <span>PORTFOLIO</span>
              </span>
              <span aria-hidden="true">PORTFOLIO</span>
            </span>
          </span>
          <span aria-hidden="true">PORTFOLIO</span>
        </span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <div>
          Selected Works
          <br />
          2018 — 2023
        </div>
        <p>
          I am a front-end developer based in Taiwan, and I focus on developing
          high-quality interactive experience websites.
        </p>
      </div>
      <div className="grid grid-cols-4 items-end pb-[12vh] sm:pb-[1.5vh]">
        <div className="text-2xl">↓</div>
        <div className="col-span-2">
          <SocialLinks />
        </div>
        <div className="ml-auto">EDDY LEE</div>
      </div>
    </section>
  )
}

export default Hero
