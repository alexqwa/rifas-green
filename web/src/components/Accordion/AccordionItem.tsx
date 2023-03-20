import * as Accordion from "@radix-ui/react-accordion"
import {
  StyledTrigger,
  StyledContent,
  StyledChevron,
} from "../../stitches/stitchesAccordion"

interface AccordionItemProps extends Accordion.AccordionItemProps {
  title: string | undefined
  description: string | undefined
}

export function AccordionItem({
  title,
  description,
  ...rest
}: AccordionItemProps) {
  return (
    <Accordion.Item {...rest}>
      <StyledTrigger className="bg-white border border-rifas-border-line hover:border-rifas-border-line hover:opacity-80 transition-colors p-6 rounded-lift flex items-center justify-between w-full">
        <span className="text-slate-600 text-base font-normal">{title}</span>
        <StyledChevron />
      </StyledTrigger>
      <StyledContent>{description}</StyledContent>
    </Accordion.Item>
  )
}
