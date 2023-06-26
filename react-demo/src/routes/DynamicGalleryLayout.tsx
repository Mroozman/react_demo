import DynamicGallerySection from '../components/Gallery/DynamicGallerySection';
import ApiCatPhoto from '../dataModels/ApiCatPhoto';
const DynamicGalleryLayout = () => {
  return <DynamicGallerySection />;
};
export default DynamicGalleryLayout;

export async function loader() {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=10'
  );
  const apiCats: ApiCatPhoto[] = await response.json();

  if (!response.ok || !apiCats) {
    throw new Error('Not found');
  }
  return apiCats;
}
