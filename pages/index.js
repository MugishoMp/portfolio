import { Container, Box, Heading } from '@chakra-ui/react'

const Page = ( ) => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I am a Computer Science Student based in The Netherlands!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Mugisho Mpozi
                        </Heading>
                        <p> Student (Developer \ Hobbyist \ Audiophile) </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
