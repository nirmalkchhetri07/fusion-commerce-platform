import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";
import heroImage from "@/assets/hero-lifestyle.jpg";
import { motion } from "framer-motion";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Curated lifestyle goods"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">
              Spring Collection 2026
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Crafted with
              <br />
              Intention
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8 leading-relaxed">
              Discover curated goods designed for the way you live. Every piece tells a story of craft and care.
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/shop?featured=true">
                  View Collections <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold mb-3">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="block p-8 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-center group"
              >
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{cat.description}</p>
                <span className="text-xs font-medium text-accent">
                  {cat.productCount} products →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-semibold mb-2">Featured</h2>
            <p className="text-muted-foreground">Our most loved pieces</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/shop">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Join the Maison Community
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Get early access to new collections, exclusive offers, and stories from our artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
