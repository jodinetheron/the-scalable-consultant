
import React from 'react';
import { Workflow, Zap, Compass, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Client Journey Mapping',
      description: 'Map out your entire client journey to identify friction points and opportunities for improvement.',
      color: 'text-space-blue',
      bgColor: 'bg-space-blue/10',
      delay: '0s'
    },
    {
      icon: Zap,
      title: 'SOP Automation',
      description: 'Automate 80% of manual tasks while maintaining your personal touch with clients.',
      color: 'text-space-purple',
      bgColor: 'bg-space-purple/10',
      delay: '0.1s'
    },
    {
      icon: Compass,
      title: 'Google-Native Stack',
      description: 'Streamline your tech using tools you already have, focused on Google Workspace integration.',
      color: 'text-space-teal',
      bgColor: 'bg-space-teal/10',
      delay: '0.2s'
    },
    {
      icon: BarChart3,
      title: 'AI-Enhanced Operations',
      description: 'Leverage AI for content creation and business operations that enhance your thought leadership.',
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
            From Overwhelmed to <span className="text-gradient">Organized</span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            With 15+ years optimizing processes and multi-million dollar project management experience, we bring transformation expertise to overwhelmed businesses.
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
