import SocialLinks from './SocialLinks'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex justify-between text-white sm:text-xl">
      <div>©{currentYear}</div>
      <div>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
