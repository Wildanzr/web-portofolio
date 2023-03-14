export default function Email () {
  return (
    <div className="w-full lg:w-8/12 flex flex-col items-start justify-start space-y-5">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-start justify-center">
          <label className="label">
            <span className="label-text text-alternate dark:text-snow duration-500 ease-out">
              What is your name?
            </span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center">
          <label className="label">
            <span className="label-text text-alternate dark:text-snow duration-500 ease-out">
              What is your email?
            </span>
          </label>
          <input
            type="text"
            placeholder="Your email"
            className="input input-bordered w-full bg-transparent"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center">
          <label className="label">
            <span className="label-text text-alternate dark:text-snow duration-500 ease-out">
              What can I do for you?
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-32 w-full bg-transparent"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
