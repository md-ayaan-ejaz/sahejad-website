import { motion } from "motion/react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="text-center py-24">
        {/* <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Thariya
        </motion.h1> */}
        {/* <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A passionate web developer who loves clean design and smooth animations.
        </motion.p> */}
      </section>

      <section className="max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm a frontend developer skilled in React, Next.js, and TailwindCSS. I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li className="border border-gray-700 p-4 rounded-xl bg-gray-800">
            <h3 className="text-xl font-medium">Portfolio Website</h3>
            <p className="text-gray-400">A modern personal site built with Next.js and Framer Motion.</p>
          </li>
          <li className="border border-gray-700 p-4 rounded-xl bg-gray-800">
            <h3 className="text-xl font-medium">Task Manager App</h3>
            <p className="text-gray-400">A productivity app using React, Zustand, and Tailwind.</p>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300">Feel free to reach out via email at <a href="mailto:hello@thariya.dev" className="underline text-blue-400">hello@thariya.dev</a>.</p>
      </section>
    </main>
  );
}
