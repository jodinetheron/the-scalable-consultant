
import React from 'react';
import { Workflow, Zap, Compass, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Mapping',
      description: 'Map out your end-to-end client processes for clarity and optimization.',
      color: 'text-space-blue',
      bgColor: 'bg-space-blue/10',
      delay: '0s'
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate workflows and integrate AI only where it truly adds value.',
      color: 'text-space-purple',
      bgColor: 'bg-space-purple/10',
      delay: '0.1s'
    },
    {
      icon: Compass,
      title: 'Tech Simplification',
      description: 'Streamline your tech stack to focus on essential Google Workspace tools.',
      color: 'text-space-teal',
      bgColor: 'bg-space-teal/10',
      delay: '0.2s'
    },
    {
      icon: BarChart3,
      title: 'Marketing Strategy',
      description: 'Develop actionable, realistic marketing plans with effective tracking.',
      color: 'text-space-blue',
      bgColor: 'bg-space-blue/10',
      delay: '0.3s'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-space-blue/10">
            <span className="text-space-blue text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-space-dark">
            Streamlined Solutions for <span className="text-gradient">Scalable Growth</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            We help consultants navigate complexity with clarity, focusing on what truly matters for business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 bg-white"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-space-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
