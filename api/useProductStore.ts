import {create} from 'zustand';

interface ProductState{
    selectedProductId: number | null;
    setSelectedProductId: (id: number) => void;
    clearSelectedProduct: () => void;
}

export const useProductStore = create<ProductState>((set) =>({
    selectedProductId: null,
    setSelectedProductId: (id) => set({selectedProductId: id}),
    clearSelectedProduct: () => set({selectedProductId: null})

}))