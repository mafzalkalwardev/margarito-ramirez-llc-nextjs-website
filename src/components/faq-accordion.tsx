'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                'group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900',
                'outline-none transition hover:text-[var(--accent)] focus-visible:text-[var(--accent)]',
              )}
            >
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
