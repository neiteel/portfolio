const SocialLinks = () => {
  return (
    <>
      <a
        className="transition-opacity hover:opacity-70"
        href="mailto:eddy@tainlee.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      ,{' '}
      <a
        className="transition-opacity hover:opacity-70"
        href="https://www.linkedin.com/in/eddylee168/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      ,{' '}
      <a
        className="transition-opacity hover:opacity-70"
        href="https://github.com/neiteel"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </>
  )
}

export default SocialLinks
