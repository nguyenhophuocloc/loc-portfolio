import type { Tool } from '@/content/site';
import Image from 'next/image';

type Props = {
  tool: Tool;
  size?: 'sm' | 'md';
  showLabel?: boolean;
};

const ToolIcon = ({ tool, size = 'md', showLabel = false }: Props) => {
  const tile = size === 'sm' ? 'h-9 w-9 rounded-lg' : 'h-12 w-12 rounded-xl';
  const img = size === 'sm' ? 'h-5 w-5' : 'h-[26px] w-[26px]';

  return (
    <span className="group/tool relative flex flex-col items-center gap-2">
      <span
        className={`${tile} grid place-items-center border transition-transform duration-200 group-hover/tool:-translate-y-0.5 ${
          tool.lightTile ? 'border-transparent bg-[#EEF0F3]' : 'border-rule bg-raised'
        }`}
      >
        <span className={`relative ${img}`}>
          <Image src={tool.icon} alt={showLabel ? '' : tool.name} fill sizes="26px" className="object-contain" />
        </span>
      </span>
      {showLabel ? (
        <span className="max-w-[5.5rem] text-center text-[11px] leading-tight text-muted">{tool.name}</span>
      ) : (
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11px] font-medium text-paper opacity-0 transition-opacity group-hover/tool:opacity-100"
        >
          {tool.name}
        </span>
      )}
    </span>
  );
};

export default ToolIcon;
