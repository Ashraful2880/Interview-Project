import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20')
            .then(res => res.json())
            .then(data => setProducts(data.results))
    }, [])
    return [products, setProducts]
};

export default useProducts;