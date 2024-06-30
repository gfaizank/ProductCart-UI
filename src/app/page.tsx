import Image from "next/image";
import { ProductCart } from "@/components/ProductCart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductList } from "@/components/ProductList";


export default function Home() {
  return (
   <>
   <Navbar />
   <ProductList />
   <Footer />
   </>
  );
}
