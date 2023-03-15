import { TitleSection, SocialMedia, Email } from './others'

const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Contact" />
      <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-5">
        {/* Social Media */}
        <div className="w-full flex flex-col items-center justify-center">
          <SocialMedia />
        </div>

        {/* Email */}
        <div className="w-full form-control flex flex-col items-center justify-center">
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Contact
