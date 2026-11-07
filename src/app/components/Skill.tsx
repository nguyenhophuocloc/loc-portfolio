import { services } from '@/content/site';
import ToolIcon from './ToolIcon';

const Skill = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">What I do</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="card relative overflow-hidden p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand opacity-[0.1] blur-2xl"
              />
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-brand" />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-4">
                {service.tools.map((tool) => (
                  <li key={tool.name} className="w-16">
                    <ToolIcon tool={tool} showLabel />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
