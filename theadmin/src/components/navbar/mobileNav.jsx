import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { Description } from '@radix-ui/react-dialog';

const mobileItems = ['Home', 'Overview', 'Analytics', 'Support'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent  side="left">
        <span className='px-4'><SheetTitle>Partner</SheetTitle></span>
        <div className="flex flex-col items-start">

          {mobileItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              onClick={() => {
                setOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}