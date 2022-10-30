import * as Accordion from "@radix-ui/react-accordion"
import {
  StyledTrigger,
  StyledContent,
  StyledChevron,
} from "../../stitches/stitchesAccordion"

interface AccordionItemProps extends Accordion.AccordionItemProps {
  title: string
  description: string
}

export function AccordionItem({
  title,
  description,
  ...rest
}: AccordionItemProps) {
  return (
    <Accordion.Item {...rest}>
      <StyledTrigger className="bg-[#202024] border-2 border-transparent hover:border-rifas-border-line hover:opacity-80 transition-colors p-6 rounded-lift flex items-center justify-between w-full">
        <span className="text-white text-base font-bold">{title}</span>
        <div className="text-white">
          <StyledChevron />
        </div>
      </StyledTrigger>
      <StyledContent>{description}</StyledContent>
    </Accordion.Item>
  )
}
