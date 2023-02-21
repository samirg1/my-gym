import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useStripe, { TProduct } from "../../hooks/useStripe";
import Card from "../Card";
import Loader from "../Loader";
import PageTitle from "../PageTitle";

/**
 * Main component for the programs page.
 */
const Programs = () => {
    const {
        isLoading: isBuyLoading,
        redirectToCheckout,
        getProducts,
    } = useStripe();
    const [isProductsLoading, setIsProductsLoading] = useState(false);
    const [products, setProducts] = useState<TProduct[]>([]);

    /**
     * Convert a number into a price string.
     * @param amount The amount to convert.
     * @returns The converted amount as a money string.
     */
    const formatNumberAsMoney = (amount: number): string => {
        return new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount);
    };

    useEffect(() => {
        setIsProductsLoading(true);

        const getAllProducts = async () => {
            const allProducts = await getProducts();
            setProducts(allProducts);
            setIsProductsLoading(false);
        };

        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            style={{
                position: "absolute",
                top: "15%",
                left: "10%",
                right: "10%",
            }}
        >
            <Loader isLoading={isBuyLoading || isProductsLoading} />
            <PageTitle size="small">PROGRAMS</PageTitle>
            {products.length === 0 ? (
                <p style={{ color: "white" }}>No programs to display.</p>
            ) : (
                products.map(({ id, price, price_id, name, description }) => (
                    <Card
                        key={id}
                        title={name + " - " + formatNumberAsMoney(price / 100)}
                        navTitle={isBuyLoading ? "Loading ..." : "Buy"}
                        onClick={() =>
                            redirectToCheckout(price_id, "/programs")
                        }
                    >
                        {description}
                    </Card>
                ))
            )}
        </Box>
    );
};

export default Programs;
