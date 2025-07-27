import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DonateCard() {
  return (
    <Card className="w-100 max-w-lg bg-amber-50 border-0 shadow-2xl text-emerald-700">
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Name</Label>
              <Input
                id="username"
                type="username"
                placeholder="Juan Dela Cruz"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="juandelacruz@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Card Number</Label>
              <Input
                id="username"
                type="username"
                placeholder="0"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Donation Amount</Label>
              <Input
                id="username"
                type="username"
                placeholder="0"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Message</Label>
              <Input
                id="username"
                type="username"
                placeholder="optional"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-emerald-700 text-amber-50">
          Submit Donation
        </Button>
      </CardFooter>
    </Card>
  );
}
