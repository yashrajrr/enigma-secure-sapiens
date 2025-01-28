import { Eye, Smartphone, Monitor, FileText, Shield } from "lucide-react"

const features = [
  {
    name: "AI-powered Gaze Tracking",
    description: "Advanced algorithms monitor student eye movements to detect suspicious behavior.",
    icon: Eye,
  },
  {
    name: "Multiple Device Detection",
    description: "Identify and prevent the use of unauthorized devices during exams.",
    icon: Smartphone,
  },
  {
    name: "Screen Sharing Prevention",
    description: "Ensure students cannot share their screens or access unauthorized resources.",
    icon: Monitor,
  },
  {
    name: "Exam Logs and Activity Records",
    description: "Detailed logs of student activity for comprehensive exam integrity.",
    icon: FileText,
  },
  {
    name: "Privacy-Focused Monitoring",
    description: "Maintain student privacy while ensuring exam security and fairness.",
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Exam Monitoring
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            ExamShield offers a suite of advanced features to ensure fair and secure online examinations.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

