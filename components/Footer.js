import styles from "./Footer.module.scss";
import {
    Box,
    Button,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    Link,
    LinkBox,
    LinkOverlay,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden,
    VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
export default function Footer() {
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    const socialMedia = [
        { title: "upwork", image_src: "upwork_icon.png", src: "" },
        // { title: "twitter", image_src: "twitter_icon.png", src: "" },
        {
            title: "linkedin",
            image_src: "linkedin_icon.png",
            src: "https://www.linkedin.com/in/pradika-pratama/",
        },
        { title: "github", image_src: "github_icon.png", src: "https://github.com/pradprat" },
        // { title: "facebook", image_src: "facebook_icon.png", src: "" },
    ];

    return (
        <chakra.footer
            bg={"transparent"}
            px={{ base: 2, sm: 4 }}
            py={4}
            position="absolute"
            bottom={0}
            width="100%"
        >
            <Flex justifyContent="space-between" mx="auto">
                <Flex></Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <LinkBox></LinkBox>
                        {socialMedia.map(media => {
                            return (
                                <Link href={media.src} target="_blank">
                                    <Button w="full" variant="ghost">
                                        <img
                                            src={
                                                require(`../assets/images/${media.image_src}`)
                                                    .default.src
                                            }
                                        ></img>
                                        {/* <img
                          src={
                              require("../assets/images/facebook_icon.png").default
                                  .src
                          }
                      ></img> */}
                                    </Button>
                                </Link>
                            );
                        })}
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
                            {socialMedia.map(media => {
                                return (
                                    <Button w="full" variant="ghost">
                                        {/* <img
                                            src={require(`../assets/images/${media.src}`)}
                                        ></img> */}
                                        <img
                                            src={require("../assets/images/facebook_icon.png").src}
                                        ></img>
                                    </Button>
                                );
                            })}
                            {/* <Button w="full" variant="ghost">
                                Home
                            </Button> */}
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </chakra.footer>
    );
}
