import * as Dialog from "@radix-ui/react-dialog"
import { keyframes, styled } from "@stitches/react"

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
})

const StyledOverlay = styled(Dialog.Overlay, {
  "&[data-state=open]": {
    animation: `${fadeIn} 200ms`,
  },
  "&[data-state=closed]": {
    animation: `${fadeOut} 200ms`,
  },
})

const StyledContent = styled(Dialog.Content, {
  "&[data-state=open]": {
    animation: `${fadeIn} 200ms`,
  },
  "&[data-state=closed]": {
    animation: `${fadeOut} 200ms`,
  },
})

export { StyledContent, StyledOverlay }
