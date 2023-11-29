import { Text, Heading, Button } from "..";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function ContactCTO() {
  const { t } = useTranslation();
  return (
    <section className="px-5 lg:px-10 mt-20 mb-20 flex items-center w-full container mx-auto" id="contact">
      <div className="w-full bg-white-blue py-10 md:py-20 rounded-tr-[100px] rounded-bl-[100px] ">
        <Heading tag="h2">{t('contact')}</Heading>
        <Text size="m" styles="text-center mt-6 max-w-[400px] md:max-w-[600px] m-auto text-sm md:text-lg">
          {t('contact_text')}
        </Text>
        <div className="flex items-center justify-center mx-auto mt-10 md:mt-14">
          <Link to='/contact'>
            <Button appearance="custom" styles="px-16">Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCTO;
