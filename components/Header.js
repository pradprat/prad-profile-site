import {
    Box,
    Button,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden,
    VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header({}) {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
        <chakra.header bg={bg} px={{ base: 2, sm: 4 }} py={4} position="absolute" top={0} width="100%">
            <Flex justifyContent="space-between" mx="auto">
                <Flex></Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <Button variant="ghost">Home</Button>
                        <Button variant="ghost">Portofolio</Button>
                        <Button variant="ghost">About Me</Button>
                    </HStack>
                    <Box display={{ base: "inline-flex", md: "none" }}>
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={useColorModeValue("gray.800", "inherit")}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? "flex" : "none"}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            m={2}
                            bg={bg}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
                            <Button w="full" variant="ghost">
                                Home
                            </Button>
                            <Button w="full" variant="ghost">
                                Portofolio
                            </Button>
                            <Button w="full" variant="ghost">
                                About Me
                            </Button>
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
}
