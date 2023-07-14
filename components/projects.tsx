import {
  Image,
  Box,
  Flex,
  Heading,
  Grid,
  Text,
  Link,
  HStack,
  Stack,
  Code,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { ForwardButton } from "./buttons";
import { Card } from "./card";
import SocialLinkIcon from "./socialLinkIcon";

const Projects = () => {
  return (
    <Box id="projects">
      <Flex mt="64px" align="center">
        <SocialLinkIcon
          ariaLabel="Github link"
          link="https://github.com/lgeoff31"
          icon={<BsGithub />}
          size="md"
        />
        <Heading>Projects</Heading>
      </Flex>
      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={8}>
        <YoutubeClone />
        <Moneyr />
        <Memories />
        <ParkwayKitchen />
        <RealEstate />
        <FooderProjectCard />

        <RockPaperScissors />
        <TrackAndField />
        <WorldRecordGuesser />
        <AnimalSounds />

        <Box>
          <Text>
            Visit my{" "}
            <Link
              textDecor="underline"
              href="https://github.com/lgeoff31"
              isExternal
            >
              GitHub
            </Link>{" "}
            for more!
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
const Moneyr = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Finance Tracker
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/moneyr.png"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This is a finance app that allows you to track your expenses,
            visualize your spending habits, calculate your desired budget
            distribution, all while giving you amazing financial advice to live
            a financially free and stable lifestyle!
          </Text>
          <Flex>
            <ForwardButton isExternal={true} href="https://moneyr.vercel.app/">
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/moneyr"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const YoutubeClone = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Youtube App
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/youtubeClone.png"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This is a streamining platform utilizing rapid API to generate
            relevant videos targetted towards your preference! It includes
            features such as likes, views, and channel icons for you to enjoy
            your favourite videos online!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://electricochy-youtube.netlify.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/youtubeWebsite"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const Memories = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Memories
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/memories.png"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This is a streamining platform utilizing rapid API to generate
            relevant videos targetted towards your preference! It includes
            features such as likes, views, and channel icons for you to enjoy
            your favourite videos online!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://electricochy-memories.netlify.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/youtubeWebsite"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const ParkwayKitchen = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Parkway Kitchen
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/parkwayKitchen.png"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This is an informative website for this local Chinese Restaurant
            named: Parway Kitchen. On this website, you can see view the menu,
            location, contact page, and more! Give this restaurant a try!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://parkway-kitchen.vercel.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/parkway-kitchen"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const TrackAndField = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Track & Field Athletes
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/TrackAndField.jpeg"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This is a guessing game where a professional olympic athlete from
            the sport of Track and Field will be shown. You Job the
            individual&apos;s professional event Ex. 100m, 200m, 400m, shotput,
            etc. This will be done based on inspecting the physical attributes
            of the athlete.
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://event-guesser.netlify.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/record-guesser"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const RealEstate = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Real Estate Agent
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/realEstate.png"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            Need a Real Estate Agent? Look no further! Contact Allen Lee; an
            expert in the field of real estate with over 35 years of experience!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://allen-lee.vercel.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/allenlee"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const WorldRecordGuesser = () => {
  return (
    <Card>
      <Stack w="100%">
        <Heading as="h3" size="lg" textAlign="center">
          Track World Records
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/WorldRecords.jpeg"
            h="240px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            In this game, you are required to enter the world record times for
            different Track Events ranging from 100m to the marathon. Given a
            guess, the program will direct whether your guess was below or above
            the target until your guess is correct. Each incorrect guess will
            deduct a life. Good Luck!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://record-guesser.netlify.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/record-guesser"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};

const RockPaperScissors = () => {
  return (
    <Card>
      <Stack>
        <Heading as="h3" size="lg" textAlign="center">
          RPS Contest Automation
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/rps.jpeg"
            h="220px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This Python program built using Selinium is a online submission
            automater to enter the Rock Paper Scissors Contest held seasonally
            by CirclekGames. The Game requires you to enter a phone number, play
            a simple game of rock paper scissors, then winning will give you a
            barcode to win a prize at your local CirclekGames to claim.
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://games.circlek.com/ca/rock-paper-prizes"
            >
              Hosted Contest Link
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/rock-paper-scissors-automater"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};
const AnimalSounds = () => {
  return (
    <Card>
      <Stack>
        <Heading as="h3" size="lg" textAlign="center">
          Animal Sounds
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/animal.jpeg"
            h="220px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            This game will play an animal sound and list out four options of
            what the animal could be. Your job is to determine which animal it
            is!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://animal-guesser.netlify.app/"
            >
              Hosted Contest Link
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/AnimalGuesser"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};

const FooderProjectCard = () => {
  return (
    <Card>
      <Stack>
        <Heading as="h3" size="lg" textAlign="center">
          Recipe Finder
        </Heading>
        <HStack justify="center">
          <Image
            rounded="md"
            src="/images/recipefinder.jpeg"
            h="230px"
            border="1px solid #666"
            display={{ base: "none", sm: "block", md: "none", lg: "block" }}
            alt=""
          />
        </HStack>

        <Box>
          <Text>
            Recipe finder will help you recreate your cherished meals! Type in
            the name of any food ex. cookies, and the API will generate an
            exhaustive list of recipes!
          </Text>
          <Flex>
            <ForwardButton
              isExternal={true}
              href="https://recipe-finder-geoffreylee.netlify.app/"
            >
              Hosted Project
            </ForwardButton>
            <ForwardButton
              isExternal={true}
              href="https://github.com/LGeoff31/recipe"
            >
              Code
            </ForwardButton>
          </Flex>
        </Box>
      </Stack>
    </Card>
  );
};

export default Projects;
