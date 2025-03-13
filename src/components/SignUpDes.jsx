import React from 'react'

const SignUpDes = () => {
  return (
    <div className="relative mx-auto flex max-w-screen-xl items-center bg-white py-12 text-gray-900 sm:py-16 lg:mb-32">
    <div className="absolute left-0 h-full w-full bg-gray-100 lg:w-1/2"></div>
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="mx-auto max-w-sm bg-white xl:max-w-md">
          <div className="relative rounded-lg border-b-4 border-blue-600 bg-white p-6 shadow-md sm:px-10 sm:py-12">
            <svg className="absolute -top-10 -left-10 text-9xl text-blue-600" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z" />
            </svg>
            <blockquote className="mt-10">
              <p className="leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tenetur esse aut perferendis voluptatum architecto est illo ipsum.</p>
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center">
                <img className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full object-cover align-middle"
                  src="https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" />
                <div className="ml-3">
                  <p className="text-lg font-bold text-gray-600">Alex Jhonson</p>
                  <p className="mt-px text-xs text-gray-600">@Alex Jhonson</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-md text-center lg:max-w-none lg:text-left">
          <h3 className="-ml-1 inline rounded-full bg-rose-500 px-4 py-2 text-sm font-medium uppercase text-white">People
            are loving Appsy!</h3>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl xl:mt-2 xl:text-5xl">Sign Up For New Updates</h2>
          <p className="mt-4 lg:mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus error itaque
            quae quas nihil at eos quis dolorum? Explicabo numquam eaque illo delectus optio corrupti.</p>

          <form action="#" method="POST" className="mt-14">
            <label for="email" className="ml-4 cursor-default text-lg font-bold"> Enter your email address to sign up and
              stay updated </label>
            <div className="relative mt-5 max-w-lg">
              <div className="absolute">
                <div className="mx-auto h-full w-full"></div>
              </div>

              <div className="relative">
                <input type="email" name="email" id="email" placeholder="Enter your email address"
                  className="block w-full rounded-full border px-5 py-5 text-base shadow-lg outline-none lg:bg-gray-100 focus:border-white focus:shadow-md focus:ring" />

                <div className="mt-4 sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 sm:flex sm:items-center sm:pr-3">
                  <button type="submit"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#4F46E5] bg-none px-8 py-4 text-base font-bold text-white shadow-md outline-none transition-all duration-200 ease-in-out sm:w-auto sm:py-3 focus:shadow-md focus:ring">Get
                    started</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpDes