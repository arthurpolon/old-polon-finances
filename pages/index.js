import { Flex, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  const { colorMode } = useColorMode()
  return (
    <>
      <Flex align="center" justify="center" minH="100vh">
        <Image src={colorMode === 'light' ? '/logo-light.svg' : '/logo-dark.svg'} width={385} height={105} />
      </Flex>
    </>
  )
}
