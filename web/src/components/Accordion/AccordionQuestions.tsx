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
    <Accordion.Root className="styles_container__hfittsryw" type="multiple">
      {data?.faqs.slice(from, to).map((faq) => {
        return (
          <Accordion.Item className="styles_item__Nypj" value={faq.id}>
            <Accordion.Trigger className="styles_trigger__Nypj group">
              {faq.title}
              <ChevronDownIcon className="styles_chevron__Nypj" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="styles_content__Nypj">
              <div className="py-[15px] px-5">{faq.description}</div>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
