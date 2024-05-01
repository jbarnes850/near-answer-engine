import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What is chain abstration?',
    message: 'What is chain abstration on NEAR?'
  },
  {
    heading: 'What are the latest projects on NEAR?',
    message: 'What are the latest projects on NEAR?'
  },
  {
    heading: 'Help me find resources and support for building on NEAR',
    message: 'Help me find resources and support for building on NEAR'
  },
  {
    heading: 'Help me identify investors for my project on NEAR',
    message: 'Help me identify investors for my project on NEAR'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
