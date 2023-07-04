// Disable cache (add later, this content should not change often)
export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  return <div>CategoryPage</div>;
}
