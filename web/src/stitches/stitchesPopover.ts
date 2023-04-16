import * as Popover from "@radix-ui/react-popover"
import { keyframes, styled } from "@stitches/react"

const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(-30px)" },
  "100%": { opacity: 1, transform: "translateY(0px)" },
})

const fadeOut = keyframes({
  "0%": { opacity: 1, transform: "translateY(0px)" },
  "100%": { opacity: 0, transform: "translateY(-30px)" },
})
const StyledContent = styled(Popover.Content, {
  "&[data-state=open]": {
    animation: `${fadeIn} 100ms`,
  },
  "&[data-state=closed]": {
    animation: `${fadeOut} 100ms`,
  },
})

export { StyledContent }
