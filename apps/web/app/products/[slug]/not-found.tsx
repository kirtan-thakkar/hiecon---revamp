import { Link } from 'next-view-transitions';
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background pt-48 pb-24 flex items-center justify-center">
      <Container className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-medium mb-6">Product Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The product you are looking for does not exist or has been moved.
        </p>
        <Link href="/products" className="px-6 py-3 bg-foreground text-background rounded-full font-medium inline-flex">
          View All Products
        </Link>
      </Container>
    </main>
  );
}
