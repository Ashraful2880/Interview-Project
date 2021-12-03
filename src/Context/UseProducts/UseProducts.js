import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch('https://staging-backend.esyms-api.com/esyms/website/product/front-condition?categoryId=&name=%20')
        .then(res => res.json())
        .then(data => setProducts(data.results))
        setLoading(false)
    }, [])
    return [products, setProducts, loading, setLoading]
};

export default useProducts;