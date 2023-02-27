import { useGlobal } from '@/contexts/Global'

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

interface IUseGlobal {
  globalStates: {
    isDark: boolean | null;
    setIsDark: (value: boolean | null) => void;
  };
}

export default function DarkSwitcher () {
  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isDark, setIsDark } = globalStates

  // Motion configuration
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }
  return (
    <div
      onClick={() => setIsDark(!isDark)}
      className={'flex rounded-full shadow-inner hover:cursor-pointer'}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isDark
            ? (
            <RiSunFill className="h-6 w-6 text-medium" />
              )
            : (
            <RiMoonClearFill className="h-6 w-6 text-snow" />
              )}
        </motion.div>
      </motion.div>
    </div>
  )
}
