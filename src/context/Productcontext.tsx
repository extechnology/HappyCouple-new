import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { ProductType } from "@/services/products/types";



// Define the ProductContext type
interface ProductContextType {
    product: ProductType | null;
    setProduct: (product: ProductType) => void;
    clearProduct: () => void;
}





// Create the ProductContext
const ProductContext = createContext<ProductContextType | undefined>(undefined);



// ProductProvider props
interface ProductProviderProps {
    children: React.ReactNode;
}



// Provider component
export const ProductProvider = ({ children }: ProductProviderProps) => {



    // Define the state
    const [product, setProductState] = useState<ProductType | null>(null);



    // Set the product
    const setProduct = useCallback((product: ProductType) => {
        setProductState(product);
    }, []);




    // Clear the product
    const clearProduct = useCallback(() => {
        setProductState(null);
    }, []);




    const contextValue = useMemo(() => ({
        product,
        setProduct,
        clearProduct,
    }), [product, setProduct, clearProduct]);



    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );


};



// Custom hook to use the ProductContext
export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};
