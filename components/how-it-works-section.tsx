import { LogIn, Eye, Flag, FileCheck } from "lucide-react"

const steps = [
  {
    name: "Log In",
    description: "Student/Proctor securely logs in to the ExamShield platform.",
    icon: LogIn,
  },
  {
    name: "Live Monitoring",
    description: "AI actively tracks irregular behaviors during the exam.",
    icon: Eye,
  },
  {
    name: "Flagging Suspicious Activities",
    description: "System raises alerts for any detected unfair practices.",
    icon: Flag,
  },
  {
    name: "Transparency in Results",
    description: "Fair and detailed reporting of exam activities and results.",
    icon: FileCheck,
  },
]

export function HowItWorksSection() {
  return (
    <div className="py-12 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Seamless Exam Monitoring Process
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            ExamShield provides a straightforward and effective process for ensuring exam integrity.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col items-center text-center md:w-1/4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500 text-white mb-4">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.name}</h3>
                <p className="text-base text-gray-500">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-indigo-200 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

