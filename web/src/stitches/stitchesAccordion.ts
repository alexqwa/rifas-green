import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { keyframes, styled } from "@stitches/react";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const StyledTrigger = styled(Accordion.Trigger, {
  "&[data-state=open]": {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: "all 0.2s linear",
  },
  "&[data-state=closed]": {
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    transition: "all 0.2s linear",
  },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  color: "#fff",
  opacity: 0.8,
  fontSize: "14px",
  padding: "24px",
  backgroundColor: "rgb(41,41,46)",
  borderBottomRightRadius: "5px",
  borderBottomLeftRadius: "5px",

  "&[data-state=open]": {
    animation: `${slideDown} 200ms`,
  },
  // '&[data-state="closed"]': {
  //   animation: `${slideUp} 100ms`,
  // },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: "#fff",
  scale: "1.5",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

export { StyledTrigger, StyledContent, StyledChevron };
