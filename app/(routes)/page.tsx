import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard("bf4120fc-f597-4aaf-9661-694ff58dee87");

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
