import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ForwardButton } from "./buttons";
import { Card } from "./card";

const aboutData = [
  {
    name: "St. Robert CHS",
    date: "2019-2023",
    description:
      "I'm currently in my senior year of high school in the IB program at St. Robert CHS. I have taken Grade 11 & 12 computer science in Python and Java. I am currently taking Higher Level math, physics and economics which are university level courses. My Standard Level courses include chemistry, english, french.",
    role: "International Baccalaureate",
    logo: <Image alt="" position="absolute" src={"/images/IB.jpeg"} h={12} />,
  },
  {
    name: "Private Computer Science And Math Tutor",
    date: "2020 - 2023",
    description:
      "I Tutor the contest material held by the University of Waterloo (Ex. Cayley, Fermet, Euclid, CCC). Additionally, I teach the fundementals of Python as well as Math courses from Gr. 9 to 12. Feel free to contact me @geoffrey31415@gmail.com",
    role: "Tutor",
    logo: (
      <Image alt="" position="absolute" src={"/images/cs.jpeg"} h={9} ml={-3} />
    ),
  },
  {
    name: "Competitive Runner",
    date: "2017 - 2023",
    description:
      "I mainly specizlize in long distance events from 5km and above. My PB's ~ 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:30:04, Marathon: 3:17:02 ",
    role: "Runner",
    logo: (
      <Image alt="" position="absolute" src={"/images/vaporflies.jpeg"} h={9} />
    ),
  },
  {
    name: "Magic and Cardistry",
    date: "2019 - 2023",
    description:
      "I began studying phycology and the art of magic after being inspired by several shows of Penn and Teller. During the pandemic, I self-taught myself several different sleight of hand tricks. I promoted my passion by creating the Magic and Cardistry Club at my School where I taught other individuals the fundementals of phycology and magic.",
    role: "Magician",
    logo: (
      <Image
        alt=""
        position="absolute"
        src={"/images/magic.jpeg"}
        mt={1}
        w={14}
      />
    ),
  },
];

const About = () => {
  return (
    <Box id="about">
      <Heading mt="64px">About Me</Heading>

      <Stack mt={2} spacing={6}>
        {aboutData.map((experience) => (
          <AboutMeSection
            key={experience.name}
            name={experience.name}
            description={experience.description}
            role={experience.role}
            icon={experience.logo}
            date={experience.date}
          />
        ))}
      </Stack>
    </Box>
  );
};

const AboutMeSection = ({
  name,
  description,
  role,
  icon,
  date,
}: {
  name: string;
  description: string;
  role: string;
  icon: JSX.Element;
  date: string;
}) => {
  return (
    <Card>
      <>
        {icon}
        <Box ml={16} w="100%" mr={4}>
          <Flex justify="space-between">
            <Box>
              <Heading size="md">
                <Link colorScheme="blue">{name}</Link>
              </Heading>
              <Text variant="subtle" mb={2}>
                {role}
              </Text>
            </Box>
            <Text>{date}</Text>
          </Flex>
          <Text>{description}</Text>
        </Box>
      </>
    </Card>
  );
};

export default About;
