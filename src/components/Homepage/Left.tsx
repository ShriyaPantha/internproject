// Left.tsx
import React, { useEffect } from "react";
import { img4 } from "@/constants/image";
import {
  DollarSignIcon,
  Search,
  ShoppingCartIcon,
  LoaderCircle,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchOrders } from "@/Redux/features/orderSlice";

// --- StatItem component ---
interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label }) => (
  <div className="flex items-center gap-3">
    {icon}
    <span className="text-2xl sm:text-3xl font-bold text-card-foreground">
      {count}
    </span>
    <span className="text-xs sm:text-sm font-medium text-muted-foreground">
      {label}
    </span>
  </div>
);

// --- StatsSection component ---
interface StatsSectionProps {
  orderCount: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({ orderCount }) => (
  <div className="space-y-3">
    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
      }
      count="2,110"
      label="visitors"
    />

    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
          <DollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
      }
      count="$8.2M"
      label="Earnings"
    />

    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
          <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
      }
      count={orderCount.toString()}
      label="orders"
    />
  </div>
);

// --- Left Component ---
const Left: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orders, loading } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="bg-card pt-6 sm:pt-9 px-4 sm:px-9 w-full lg:w-80 border-r border-border">
      {/* Date + Greeting */}
      <div className="border-b border-border pb-4">
        <span className="text-muted-foreground text-sm sm:text-md block mb-1">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <h2 className="text-xl sm:text-2xl font-semibold text-card-foreground">
          Good Morning,
          <div>Captain!</div>
        </h2>
      </div>

      {/* Updates / Stats */}
      <div className="border-b border-border pb-4 mt-5">
        <div className="text-muted-foreground text-xs sm:text-sm mb-3">
          Updates from yesterday
        </div>

        <StatsSection orderCount={orders.length} />
      </div>

      {/* Orders List */}
      <div className="mt-5">
        <div className="pb-4 text-muted-foreground text-sm sm:text-base font-medium">
          You have {orders.length} orders today.
        </div>

        <div className="line-scroll overflow-y-auto max-h-[300px] sm:max-h-[420px] pr-3">
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading orders...</p>
          ) : (
            orders.map((order) => {
              const product = order.products?.[0]?.product;

              return (
                <div
                  key={order._id}
                  className="flex items-center gap-3 bg-muted rounded-md mb-2 p-2"
                >
                  <div className="w-14 h-10 shrink-0">
                    <img
                      src={product?.image || img4}
                      alt={product?.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-card-foreground text-sm font-semibold truncate">
                      {product?.title}
                    </span>
                    <span className="text-muted-foreground text-xs mt-1">
                      ${product?.price}
                    </span>
                  </div>

                  <div className="w-7 h-7 flex items-center justify-center border border-border rounded-full bg-background">
                    <LoaderCircle className="w-3 h-3 text-destructive" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Left;