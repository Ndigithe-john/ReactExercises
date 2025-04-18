import { AspectRatio, Box } from "@chakra-ui/react";

function Testing() {
  return (
    // <AspectRatio maxW="400px" ratio={1}>
    //   <iframe
    //     title="naruto"
    //     src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    //     allowFullScreen
    //   />
    // </AspectRatio>

    <Box
      p="4"
      borderWidth="1px"
      borderColor="border.disabled"
      color="fg.disabled"
    >
      Somewhat disabled box
    </Box>
  );
}

export default Testing;
