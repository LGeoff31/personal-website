import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useRouter } from "next/router";
import SocialLinkIcon from "./socialLinkIcon";

const Hero = () => {
  return (
    <Flex
      id="hero"
      h="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading variant="h1" size="4xl" fontWeight="normal">
        Geoffrey Lee
      </Heading>
      <Text variant="h2" fontSize="3xl" fontWeight="light">
        Aspiring Software Engineer
      </Text>
      <SocialLinks />

      <ScrollDown />
    </Flex>
  );
};

const SocialLinks = () => {
  return (
    <Flex>
      <SocialLinkIcon
        ariaLabel="Github link"
        link="https://github.com/LGeoff31"
        icon={<BsGithub />}
        size="lg"
      />
      <SocialLinkIcon
        ariaLabel="Linkedin link"
        link="https://www.linkedin.com/in/lgeoff31/"
        icon={<BsLinkedin />}
        size="lg"
      />
      <SocialLinkIcon
        ariaLabel="Email"
        link="mailto:geoffrey31415@gmail.com?subject=Interest From Your Portfolio Website&body=Hi Geoffrey,"
        icon={<AiOutlineMail />}
        size="lg"
      />
      <SocialLinkIcon
        ariaLabel="Download resume"
        link="/resume.pdf"
        icon={<CgFileDocument />}
        size="lg"
      />
    </Flex>
  );
};

const ScrollDown = () => {
  const router = useRouter();

  const arrowColor = useColorModeValue("#000", "#fff");

  const handleClick = () => {
    router.push("#about");
  };

  return (
    <Box mt="15vh" cursor="pointer" className="content" onClick={handleClick}>
      <div className="round">
        <span style={{ backgroundColor: arrowColor }}></span>
        <span style={{ backgroundColor: arrowColor }}></span>
        <span style={{ backgroundColor: arrowColor }}></span>
        <span style={{ backgroundColor: arrowColor }}></span>
      </div>
    </Box>
  );
};

export default Hero;
