/*
|-----------------------------------------
| setting up Chadcn for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Chadcn = () => {
  return (
    <main className="bg-slate-800 text-white flex w-full h-screen items-center justify-center">
      {" "}
      <div className="flex flex-col gap-4">
        All components rendered form chadCN
        <Button variant="outline" className="text-slate-900">
          Button form ChadCN
        </Button>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
        </ScrollArea>
        <Popover>
          <PopoverTrigger className="border rounded-lg py-2">
            {" "}
            Click me
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </main>
  );
};
export default Chadcn;
