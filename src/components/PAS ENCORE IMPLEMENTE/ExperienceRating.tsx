/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5ETfUvX2Oyr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <ThumbsUpIcon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>How was your experience?</DialogTitle>
          <DialogDescription>Please take a moment to provide feedback on the platform.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="rating">Rate the platform</Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button key={star} variant="ghost" size="icon" className="text-yellow-500">
                  <StarIcon className="w-6 h-6" />
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="feedback">What did you like most?</Label>
            <Textarea id="feedback" placeholder="Share your thoughts..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="improvements">What could be improved?</Label>
            <Textarea id="improvements" placeholder="Let us know your ideas..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="other">Any other feedback?</Label>
            <Textarea id="other" placeholder="Anything else you'd like to share..." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}