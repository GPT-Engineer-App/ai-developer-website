import { Container, Text, VStack, HStack, Box, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjk5Njk2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Developer" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">
          AI Developer
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm an AI Developer specializing in creating intelligent systems and applications. I have a passion for leveraging machine learning and artificial intelligence to solve real-world problems.
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/your-profile" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/your-profile" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
        <Button colorScheme="teal" size="lg">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
