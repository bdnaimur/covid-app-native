import { typography } from "../../theme/typography"

const BASE = {
    fontFamily: typography.GraphikRegular,
}
const MEDIUM = {
    fontFamily: typography.GraphikMedium,
}
const SEMIBOLD = {
    fontFamily: typography.GraphikSemiBold,
}
export const presets = {
    default: BASE,
    MEDIUM,
    SEMIBOLD,
    h1: {
        ...SEMIBOLD,
        fontSize: 24
    },
    h2: {
        ...SEMIBOLD,
        fontSize: 20
    },
}