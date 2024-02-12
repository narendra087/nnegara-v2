import Container from "../layout/container";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Hero = () => {
  return (
    <header className="block sticky top-0 px-6 bg-background pt-16">
      <Container>
        <div className="flex flex-row justify-center space-x-4 top-0 h-[calc(100vh-4rem)]">
          <div className="w-1/2 flex flex-col space-y-16 my-auto">
            <h1 className="text-8xl font-bold">I`m Narendra Negara.</h1>
            <div className="flex flex-col">
              <p className="text-2xl text-muted-foreground">
                Frontend Enthusiast.
              </p>
              <p className="text-2xl text-muted-foreground">
                Develop products with love, pay attention to details.
              </p>
              <p className="text-2xl text-muted-foreground">
                Available to contribute to your projects.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            {/* <Avatar>
              <AvatarImage src="" alt="@narendranegara" />
              <AvatarFallback>
                NN
              </AvatarFallback>
            </Avatar> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
