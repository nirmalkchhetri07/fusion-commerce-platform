import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.status === "active");
    if (activeCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    if (searchParams.get("featured") === "true") {
      result = result.filter((p) => p.featured);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    return result;
  }, [activeCategory, searchQuery, searchParams]);

  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    params.delete("featured");
    setSearchParams(params);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">Shop</h1>
          <p className="text-muted-foreground">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory("all")}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.slug ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat.slug)}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">No products found</p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setCategory("all"); }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
