'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Server,
} from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    icon: Code,
    title: 'Choose Your Stack',
    description: 'Select your preferred programming languages and frameworks.',
  },
  {
    icon: Database,
    title: 'Set Up Database',
    description: 'Configure your database and ORM for data management.',
  },
  {
    icon: Server,
    title: 'Configure Server',
    description: 'Set up your server environment and API endpoints.',
  },
  {
    icon: Globe,
    title: 'Deploy',
    description: 'Deploy your application to a production environment.',
  },
];

export default function AnimatedSetupGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold md:text-6xl">
        Web Dev Setup Guide
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 text-center text-xl text-gray-600">
        Your path to production-ready web development
      </motion.p>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-lg bg-white p-6 shadow-lg ${
              currentStep === index ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => setCurrentStep(index)}>
            <div className="mb-4 flex items-center">
              <step.icon className="mr-2 h-8 w-8 text-blue-500" />
              <h2 className="text-xl font-semibold">{step.title}</h2>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">
          Step {currentStep + 1}: {steps[currentStep].title}
        </h2>
        <p className="mb-4 text-gray-600">{steps[currentStep].description}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 disabled:opacity-50">
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white">
            {currentStep === steps.length - 1 ? (
              <>
                Finish <CheckCircle className="ml-2" />
              </>
            ) : (
              <>
                Next <ArrowRight className="ml-2" />
              </>
            )}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 text-center">
        <a
          href="#"
          className="rounded-full bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-purple-700">
          Get Started Now
        </a>
      </motion.div>
    </div>
  );
}
