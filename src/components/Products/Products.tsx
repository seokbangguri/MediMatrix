import { Text, Card, Heading } from "../../components";
import BeeryImage from "../../assets/Beery.png"
import HoduImage from "../../assets/hodu.png"
import SpermImage from "../../assets/sperm.png"
import { useTranslation } from 'react-i18next';

function Products() {
  const { t } = useTranslation();
  return (
    <section className="px-5 my-10 flex flex-col justify-center container lg:px-10 mx-auto relative">
      <Heading tag="h2" className=''>
        Products and Services
      </Heading>
      <Text size="m" styles="max-w-[480px] text-center m-auto">
        {t('products_text')}
      </Text>
      <div className="flex items-center justify-center w-auto gap-14 mt-16 mb-10 flex-wrap">
        <Card
          source={BeeryImage}
          name="Beery VMI"
          route="/beery"
        >
          {t('beery')}
        </Card>
        <Card
          route='/sperm'
          source={SpermImage}
          name="Sperm"
        >
          {t('sperm')}
        </Card>
        <Card
          route='/beery'
          source={HoduImage}
          name="Hodu"
        >
          {t('hodu')}
        </Card>
        <Card
          route='/beery'
          source="https://placehold.co/600x580?text=Project+3"
          name="Seez"
        >
          Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.
        </Card>
      </div>
      <div id="partners" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Products;
