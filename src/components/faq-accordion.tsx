'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

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
        <Accordion.Item key={item.question} value={item.question} className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 text-sm leading-7 text-slate-600 data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
