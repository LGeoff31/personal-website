import { Box, Text, Flex, Button, useColorMode } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import SocialLinkIcon from "./socialLinkIcon";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="center">
      <Text mt={20}>Geoffrey Lee</Text>
      <Box mb={10}>
        <Flex align="center" justify="center">
          <SocialLinkIcon
            ariaLabel="Github link"
            link="https://github.com/lgeoff31"
            icon={<BsGithub />}
            size="sm"
          />
          <SocialLinkIcon
            ariaLabel="Linkedin link"
            link="https://www.linkedin.com/in/lgeoff31/"
            icon={<BsLinkedin />}
            size="sm"
          />
          <SocialLinkIcon
            ariaLabel="Email"
            link="mailto:geoffrey31415@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Geoffrey,"
            icon={<AiOutlineMail />}
            size="sm"
          />
          <SocialLinkIcon
            ariaLabel="Download resume"
            link="/resume.pdf"
            icon={<CgFileDocument />}
            size="sm"
          />
          <Button ml={2} size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
