import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Error({ title, description }: { title: string, description: string }) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
}