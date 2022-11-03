import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";

const StyledTrigger = styled(Select.Trigger, {
  "&[data-state=open]": {
    borderColor: "rgb(139,92,246)",
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&[data-state=closed]": {
    borderColor: "rgb(41,41,46)",
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: "#fff",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const StyledContent = styled(Select.Content, {
  overflow: "hidden",
  color: "#fff",
  fontSize: "14px",
  backgroundColor: "rgb(18,18,20)",
});

export { StyledTrigger, StyledChevron, StyledContent };
