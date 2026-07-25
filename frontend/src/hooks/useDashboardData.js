import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const useDashboardData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.data || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const stats = useMemo(() => {
    const categories = new Set(
      products.map((p) => p.category)
    ).size;

    return [
      {
        title: "Products",
        value: products.length,
      },
      {
        title: "Categories",
        value: categories,
      },
      {
        title: "Generated",
        value: products.length,
      },
      {
        title: "Updated",
        value: products.length,
      },
    ];
  }, [products]);

  const recentActivity = useMemo(() => {
    return [...products]
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);
  }, [products]);

  const chartData = useMemo(() => {
    const map = {
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
    };

    products.forEach((product) => {
      const day =
        weekDays[new Date(product.createdAt).getDay()];
      map[day]++;
    });

    return weekDays.map((day) => ({
      day,
      value: map[day],
    }));
  }, [products]);

  return {
    loading,
    stats,
    chartData,
    recentActivity,
  };
};

export default useDashboardData;