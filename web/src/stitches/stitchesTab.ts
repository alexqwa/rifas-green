import * as Tabs from "@radix-ui/react-tabs"
import { styled } from "@stitches/react"

const StyledTabs = styled(Tabs.Trigger, {
  "&[data-state=active]": {
    borderBottomWidth: "3px",
    borderColor: "#8b5cf6",
    marginBottom: "-2px",
    color: "#8b5cf6",
    transition: "all 0.2s linear",
  },
  "&[data-state=inactive]": {
    borderBottomWidth: "3px",
    borderColor: "transparent",
    marginBottom: "-2px",
    color: "#ababab",
    transition: "all 0.2s linear",
  },
})

export { StyledTabs }
