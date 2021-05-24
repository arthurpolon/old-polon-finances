import {
   Box,
   Flex,
   Text,
   IconButton,
   Button,
   Stack,
   Popover,
   PopoverTrigger,
   useColorModeValue,
   useDisclosure,
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerHeader,
   DrawerBody,
   VStack,
   HStack,
} from "@chakra-ui/react";

import {
   HamburgerIcon,
   CloseIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import NextLink from "next/link";
import { useColors } from "../contexts/ColorsContext";

export default function Navbar() {
   const { colorMode } = useColors();
   const { isOpen, onToggle, onClose } = useDisclosure();

   return (
      <Box>
         <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
            <Flex
               flex={{ base: 1, md: "auto" }}
               ml={{ base: -2 }}
               display={{ base: "flex", md: "none" }}
            >
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? (
                        <CloseIcon w={3} h={3} />
                     ) : (
                        <HamburgerIcon w={5} h={5} />
                     )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
               />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
               <NextLink href="/">
                  <a>
                     <Image
                        src={
                           colorMode === "light"
                              ? "/logo-light.svg"
                              : "/logo-dark.svg"
                        }
                        width="200"
                        height="100"
                     />
                  </a>
               </NextLink>
               <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <DesktopNav />
               </Flex>
            </Flex>

            {/* Mobile Drawer */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay display={{base: 'flex', md:'none'}} />
              <DrawerContent display={{base: 'flex', md:'none'}} maxW="70%">
                <DrawerHeader>
                   <Flex direction="column">
                     <Image
                     src={
                           colorMode === "light"
                           ? "/logo-light.svg"
                           : "/logo-dark.svg"
                     }
                     width="300"
                     height="200"
                     />
                     <Text mt="-30px" fontWeight="thin" fontSize="sm">by Arthur Polon</Text>
                   </Flex>
                </DrawerHeader>
                <DrawerBody>
                  <VStack spacing="0" justify="space-evenly" boxSize="100%">
                     <NextLink href="/app">
                        <Button colorScheme="green" p="30px" fontWeight="medium">
                           <a>Get Started</a>
                        </Button>
                     </NextLink>
                     <VStack spacing="20px" align="start">
                        {NAV_ITEMS.map((navItem, id) => {
                           return(
                              <NextLink href={navItem.href} key={id}>
                                 <Box bg='rgba(0,0,0,0.1)' p="10px" borderRadius="5px" w={100} align="center">
                                    <a>{navItem.label}</a>
                                 </Box>
                              </NextLink>
                           )
                        })}

                     </VStack>

                     <HStack spacing="50px" justify="space-between">
                        <Button
                           as={"a"}
                           fontSize={"sm"}
                           fontWeight={600}
                           variant={"link"}
                           href={"#"}
                        >
                           Sign In
                        </Button>

                        <Button
                           fontSize={"sm"}
                           fontWeight={600}
                           colorScheme="green"
                        >
                           Sign Up
                        </Button>
                     </HStack>
                  </VStack>
                  
                  
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            {/* Sign Buttons */}
            <Stack
               flex={{ base: 1, md: 0 }}
               justify={"flex-end"}
               direction={"row"}
               spacing={10}
            >
               <Button
                  as={"a"}
                  fontSize={"md"}
                  fontWeight={400}
                  variant={"link"}
                  href={"#"}
               >
                  Sign In
               </Button>
               <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"md"}
                  fontWeight={600}
                  colorScheme="green"
               >
                  Sign Up
               </Button>
            </Stack>
         </Flex>
      </Box>
   );
}

const DesktopNav = () => {
   return (
      <Stack direction={"row"} align="center" spacing={50}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Box
                        p={2}
                        fontSize={"md"}
                        fontWeight={500}
                        color={useColorModeValue("gray.600", "gray.200")}
                        _hover={{
                           textDecoration: "none",
                           color: useColorModeValue("gray.800", "white"),
                        }}
                     >
                        <NextLink href={navItem.href}>
                           <a>{navItem.label}</a>
                        </NextLink>
                     </Box>
                  </PopoverTrigger>
               </Popover>
            </Box>
         ))}
      </Stack>
   );
};

const NAV_ITEMS = [
   {
      label: "Home",
      href: "/",
   },
   {
      label: "Plans",
      href: "/plans",
   },
   {
      label: "About Me",
      href: "/about",
   },
];
