import React, { createContext, useContext, useState } from 'react';
import { Product, Review, Comment } from '../types';
import { dummyProducts, dummyReviews, dummyComments } from '../data/dummy';

interface DataContextType {
  products: Product[];
  reviews: Review[];
  comments: Comment[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addReview: (review: Omit<Review, 'id'>) => void;
  deleteReview: (id: string) => void;
  addComment: (comment: Omit<Comment, 'id'>) => void;
  updateHelpful: (reviewId: string, helpful: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [reviews, setReviews] = useState<Review[]>(dummyReviews);
  const [comments, setComments] = useState<Comment[]>(dummyComments);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (product: Product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    setReviews(reviews.filter((r) => r.productId !== id));
  };

  const addReview = (review: Omit<Review, 'id'>) => {
    const newReview = {
      ...review,
      id: Date.now().toString(),
      helpful: 0,
      notHelpful: 0,
    };
    setReviews([...reviews, newReview]);
  };

  const deleteReview = (id: string) => {
    setReviews(reviews.filter((r) => r.id !== id));
    setComments(comments.filter((c) => c.reviewId !== id));
  };

  const addComment = (comment: Omit<Comment, 'id'>) => {
    const newComment = { ...comment, id: Date.now().toString() };
    setComments([...comments, newComment]);
  };

  const updateHelpful = (reviewId: string, helpful: boolean) => {
    setReviews(
      reviews.map((r) =>
        r.id === reviewId
          ? {
              ...r,
              helpful: helpful ? r.helpful + 1 : r.helpful,
              notHelpful: !helpful ? r.notHelpful + 1 : r.notHelpful,
            }
          : r
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        products,
        reviews,
        comments,
        addProduct,
        updateProduct,
        deleteProduct,
        addReview,
        deleteReview,
        addComment,
        updateHelpful,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}