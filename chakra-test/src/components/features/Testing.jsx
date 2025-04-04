import { AspectRatio } from "@chakra-ui/react";

function Testing() {
  return (
    <AspectRatio maxW="400px" ratio={1}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
  );
}

export default Testing;
