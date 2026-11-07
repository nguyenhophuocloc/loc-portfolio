import { ChevronRight } from 'lucide-react';

/**
 * Placeholder visual until a real n8n screenshot is added: workflow steps drawn
 * as connected nodes on a dotted canvas, like the n8n editor.
 */
const FlowDiagram = ({ steps }: { steps: string[] }) => (
  <div className="relative flex h-full items-center px-4 sm:px-6 [background-image:radial-gradient(rgb(var(--rule))_1px,transparent_1px)] [background-size:16px_16px]">
    <ol className="flex w-full items-center">
      {steps.map((step, i) => (
        <li key={step} className="flex min-w-0 flex-1 items-center">
          <span
            className={`min-w-0 flex-1 rounded-lg border px-2 py-2.5 text-center text-[11px] font-medium leading-tight sm:text-xs ${
              i === 0
                ? 'border-brand/50 bg-raised text-brand'
                : i === steps.length - 1
                  ? 'border-brand/50 bg-raised text-ink'
                  : 'border-rule bg-raised text-muted'
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight aria-hidden className="mx-0.5 h-3.5 w-3.5 shrink-0 text-brand/70 sm:mx-1" />
          )}
        </li>
      ))}
    </ol>
  </div>
);

export default FlowDiagram;
