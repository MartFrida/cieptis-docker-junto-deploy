/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"

const SectionRegular = ({ id, children }) => {

  return (
    <div id={id} className={`${theme.background} p-2 md:p-4 lg:p-6 rounded-lg ${theme.shadow2xl} scroll-mt-24`}>
      {children}
    </div>
  )
}

export default SectionRegular