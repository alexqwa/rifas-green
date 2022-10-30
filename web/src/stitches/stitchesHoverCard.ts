import * as HoverCard from "@radix-ui/react-hover-card"
import { keyframes, styled } from "@stitches/react"

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
})

const StyledContent = styled(HoverCard.Content, {
  "&[data-state=open]": {
    animation: `${fadeIn} 200ms`,
  },
  "&[data-state=closed]": {
    animation: `${fadeOut} 200ms`,
  },
})

export { StyledContent }
