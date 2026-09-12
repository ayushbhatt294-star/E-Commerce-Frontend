import { useState } from 'react'
import { ArrowRight, LockKeyhole, UserRound } from 'lucide-react'

const Auth = ({ setName }) => {
  const [enteredName, setEnteredName] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!enteredName.trim()) return

    setName(enteredName.trim())
  }

  return (
    <section className="relative flex min-h-[calc(100vh-112px)] items-center justify-center overflow-hidden bg-[#09090b] px-4 py-16">
      
      {/* Background glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      {/* Decorative shapes */}
      <div className="absolute left-[12%] top-[20%] h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_25px_8px_rgba(217,70,239,0.35)]" />
      <div className="absolute bottom-[25%] right-[15%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(34,211,238,0.35)]" />

      {/* Login card */}
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-70 blur-sm" />

        <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

          {/* Icon */}
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/20">
            <UserRound className="text-white" size={28} />
          </div>

          {/* Heading */}
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Welcome back
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Enter your
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              name.
            </span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Just tell us who you are and let's get you inside.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-10">

            <label className="mb-3 block text-sm font-medium text-zinc-300">
              Your name
            </label>

            <div className="group relative">
              <UserRound
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition group-focus-within:text-fuchsia-400"
              />

              <input
                type="text"
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-400/60 focus:bg-white/[0.08] focus:ring-4 focus:ring-fuchsia-500/10"
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 py-4 font-bold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/20 active:scale-[0.98]"
            >
              Enter Store

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Bottom decoration */}
          <div className="mt-8 flex items-center gap-3 text-xs text-zinc-600">
            <div className="h-px flex-1 bg-white/10" />
            <LockKeyhole size={13} />
            <span>Simple & secure</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Auth