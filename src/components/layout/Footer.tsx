import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-lg font-semibold mb-4">MAISON</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Curated lifestyle goods crafted with intention. Quality you can feel, design you can see.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Shop</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/shop" className="hover:opacity-100 transition-opacity">All Products</Link>
            <Link to="/shop?category=accessories" className="hover:opacity-100 transition-opacity">Accessories</Link>
            <Link to="/shop?category=home" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/shop?category=fashion" className="hover:opacity-100 transition-opacity">Fashion</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">Sustainability</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Help</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/about" className="hover:opacity-100 transition-opacity">Shipping</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">Returns</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-sm opacity-50 text-center">
        © {new Date().getFullYear()} Maison. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
