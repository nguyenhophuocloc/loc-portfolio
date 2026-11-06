import { layers } from '@/content/site';
import ToolIcon from './ToolIcon';

/** One gold accent for every layer keeps the hero in the black-and-gold palette. */
export const layerColor: Record<string, string> = {
  seo: 'rgb(var(--brand))',
  frontend: 'rgb(var(--brand))',
  cms: 'rgb(var(--brand))',
  backend: 'rgb(var(--brand))',
  automation: 'rgb(var(--brand))',
  workflow: 'rgb(var(--brand))',
};

/**
 * Hero diagram: a website drawn as its layers, from what visitors and Google
 * see down to what runs on the server. Each layer lists the tools used there.
 */
const LayerStack = () => {
  return (
    <div className="relative">
      {/* Faint gold glow behind the stack for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(var(--brand)/0.14),transparent)]"
      />
      {/* Vertical spine joining the layers */}
      <div
        aria-hidden
        className="absolute bottom-10 left-[1.4rem] top-10 w-px bg-gradient-to-b from-brand/60 via-rule to-rule"
      />

      <ol className="relative space-y-3">
        {layers.map((layer, i) => {
          const color = layerColor[layer.id];
          return (
            <li
              key={layer.id}
              className="layer-in card relative flex flex-col items-start gap-3 p-4 pl-12 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] sm:ml-[var(--offset)] sm:flex-row sm:items-center sm:gap-6 sm:p-5 sm:pl-14"
              style={{ animationDelay: `${150 + i * 110}ms`, '--offset': `${i * 10}px` } as React.CSSProperties}
            >
              <span
                aria-hidden
                className="absolute left-[1.05rem] top-[1.6rem] h-3 w-3 rounded-full ring-4 ring-surface sm:top-1/2 sm:-translate-y-1/2"
                style={{ backgroundColor: color }}
              />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-ink">{layer.label}</p>
                <p className="mt-0.5 truncate text-sm text-muted">{layer.note}</p>
              </div>
              <ul className="flex shrink-0 gap-2">
                {layer.tools.map((tool) => (
                  <li key={tool.name}>
                    <ToolIcon tool={tool} size="sm" />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default LayerStack;
