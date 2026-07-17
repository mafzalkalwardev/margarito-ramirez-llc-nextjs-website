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
    <Accordion.Root type="single" collapsible className="divide-y divide-[var(--border)] border border-[var(--border)] bg-white">
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                'group flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-[var(--ink)]',
                'outline-none transition hover:text-[var(--accent)]',
              )}
            >
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-5 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
