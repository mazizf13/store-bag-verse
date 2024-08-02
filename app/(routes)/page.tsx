import getBanner from '@/actions/get-banner';
import Banner from '@/components/banner';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const banner = await getBanner('bd38a675-eee0-4c55-b49c-96f273d6cfa3');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
      </div>
    </Container>
  );
};

export default HomePage;
