import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useCartStore } from "@/stores/cartStore";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="font-display text-2xl font-semibold mb-3">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <h1 className="font-display text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <Link to={`/product/${item.product.slug}`} className="w-20 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.slug}`} className="font-medium text-sm hover:text-accent transition-colors line-clamp-1">
                      {item.product.title}
                    </Link>
                    <p className="text-xs text-muted-foreground mb-3">{item.product.brand}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-secondary transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">
                          ${item.product.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h2 className="font-display text-lg font-semibold mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-success">{totalPrice() >= 100 ? "Free" : "$9.95"}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${totalPrice() >= 100 ? totalPrice() : totalPrice() + 9.95}</span>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium mb-3" size="lg">
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full text-sm" asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
