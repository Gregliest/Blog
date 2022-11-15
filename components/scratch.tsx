export default function Card() {
  return (
    <div className="group relative mx-auto max-w-7xl">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-white to-zinc-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />

      <div className="items-top relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
        <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
          ></path>
        </svg>
        <div className="space-y-2">
          <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
          <a className="block text-indigo-400 transition duration-200 group-hover:text-slate-800">
            Read Article →
          </a>
        </div>
      </div>
    </div>
  )
}
