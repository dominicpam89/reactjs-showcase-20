import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
    0% {
    box-shadow: -10px -10px 0 5px,
                -10px -10px 0 5px,
                -10px -10px 0 5px,
                -10px -10px 0 5px;
    }
    8.33% {
      box-shadow: -10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px -10px 0 5px;
    }
    16.66% {
      box-shadow: -10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px 10px 0 5px,
                  10px 10px 0 5px;
    }
    24.99% {
      box-shadow: -10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    33.32% {
      box-shadow: -10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px 10px 0 5px,
                  -10px -10px 0 5px;
    }
    41.65% {
      box-shadow: 10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px 10px 0 5px,
                  10px -10px 0 5px;
    }
    49.98% {
      box-shadow: 10px 10px 0 5px,
                10px 10px 0 5px,
                10px 10px 0 5px,
                10px 10px 0 5px;
    }
    58.31% {
      box-shadow: -10px 10px 0 5px,
                  -10px 10px 0 5px,
                  10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    66.64% {
      box-shadow: -10px -10px 0 5px,
                  -10px -10px 0 5px,
                  10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    74.97% {
      box-shadow: -10px -10px 0 5px,
                  10px -10px 0 5px,
                  10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    83.3% {
      box-shadow: -10px -10px 0 5px,
                  10px 10px 0 5px,
                  10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    91.63% {
      box-shadow: -10px -10px 0 5px,
                  -10px 10px 0 5px,
                  -10px 10px 0 5px,
                  -10px 10px 0 5px;
    }
    100% {
      box-shadow: -10px -10px 0 5px,
                  -10px -10px 0 5px,
                  -10px -10px 0 5px,
                  -10px -10px 0 5px;
    }
`

type Duration = "slow" | "normal" | "fast"
interface LoaderProps {
	$duration: Duration
  $scale?: number
}

const getDuration = (duration: Duration) => {
	let val
	switch (duration) {
		default:
			val = "1s"
			break
		case "slow":
			val = "2s"
			break
		case "fast":
			val = "500ms"
			break
	}
	return val
}

const LoaderCubeMozaic = styled(motion.span)<LoaderProps>`
	height: 5px;
	width: 5px;
	box-shadow: -10px -10px 0 5px, -10px -10px 0 5px, -10px -10px 0 5px,
		-10px -10px 0 5px;
  transform: ${props=>`scale(${props.$scale})`};
  transition: none;
	animation: ${animation} ${(props) => getDuration(props.$duration)} infinite;
`

LoaderCubeMozaic.defaultProps = {
	$duration: "normal",
  $scale: 1.2
}

export default LoaderCubeMozaic