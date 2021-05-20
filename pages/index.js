import { Flex, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import ThemeButton from '../components/ThemeButton'

export default function Home() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Navbar />
      <ThemeButton />
      <Flex align="center" justify="center" minH="80vh">
        <Image src={colorMode === 'light' ? '/logo-light.svg' : '/logo-dark.svg'} width={385} height={105} />
      </Flex>
    </>
  )
}
