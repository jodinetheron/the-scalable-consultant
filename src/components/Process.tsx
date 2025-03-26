
import React from 'react';
import { Search, FileText, Settings, Zap } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your current processes and tech stack to identify bottlenecks and opportunities.',
      color: 'text-space-blue',
      bgColor: 'bg-space-blue/10',
      lineColor: 'from-space-blue to-space-purple'
    },
    {
      icon: FileText,
      title: 'Process Mapping',
      description: 'Together, we create clear visualizations of your end-to-end client processes.',
      color: 'text-space-purple',
      bgColor: 'bg-space-purple/10',
      lineColor: 'from-space-purple to-space-teal'
    },
    {
      icon: Settings,
      title: 'Tech Simplification',
      description: 'We streamline your tools to focus on Google Workspace and eliminate unnecessary complexity.',
      color: 'text-space-teal',
      bgColor: 'bg-space-teal/10',
      lineColor: 'from-space-teal to-space-blue'
    },
    {
      icon: Zap,
      title: 'Automation Implementation',
      description: 'We set up targeted automations and AI integrations to amplify your productivity.',
      color: 'text-space-blue',
      bgColor: 'bg-space-blue/10',
      lineColor: ''
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-space-purple/10">
            <span className="text-space-purple text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-space-dark">
            Your Journey to <span className="text-gradient">Scalable Success</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            A systematic approach that transforms complexity into clarity and action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6 mb-16 relative z-10">
                <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2 text-space-dark">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b ${step.lineColor} h-16`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
