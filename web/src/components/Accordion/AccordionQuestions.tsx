import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { useFaqsQuery } from "../../generated/graphql"

interface AccordionQuestionsProps {
  to: number
  from: number
}

export function AccordionQuestions({ from, to }: AccordionQuestionsProps) {
  const [{ data }] = useFaqsQuery()

  return (
    <Accordion.Root className="rounded-md divide-y-[1px]" type="multiple">
      {data?.faqs.slice(from, to).map((faq) => {
        return (
          <Accordion.Item
            className="overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
            value={faq.id}
          >
            <Accordion.Trigger className="text-violet11 shadow-mauve6 hover:bg-mauve2 group flex py-6 flex-1 cursor-pointer items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] w-full">
              {faq.title}
              <ChevronDownIcon
                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
            <Accordion.Content className="text-mauve11 bg-mauve4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
              <div className="py-[15px] px-5">{faq.description}</div>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
