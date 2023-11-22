import {
  SectionButtonContainer,
  SectionDescription,
  SectionHeading,
  ServiceImage,
  ServiceSection,
  ServiceSectionContainer,
  ServiceSectionItem
} from './styles';
import { PageHeading } from '../common/styles';
import ManicureImg from '../../images/IMG_8937.jpeg';
import { MyButton } from '../../pages/home/styles';
import ServiceForm from './ServiceForm/ServiceForm';

const Services = () => {
  return (
    <>
      <PageHeading>Services</PageHeading>

      <ServiceSectionContainer>
        <ServiceSection>
          <ServiceSectionItem>
            <ServiceImage primary imgSource={ManicureImg} />
          </ServiceSectionItem>
          <ServiceSectionItem>
            <SectionHeading>Маникюр</SectionHeading>
            <SectionDescription>
              Ногти отрастают? А хочется норм выглядеть??!
              <p>
                Закажи маникюр и я отпилю тебе лишнее, дорощу нехватающее, будешь,
                наконец, норм выглядеть и чувствовать себя уверенее!
              </p>
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton rounded>Записаться</MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
        </ServiceSection>
      </ServiceSectionContainer>

      <ServiceSectionContainer bgColor="#bef1f1" color="#001515">
        <ServiceSection>
          <ServiceSectionItem>
            <SectionHeading>Педикюр</SectionHeading>
            <SectionDescription>
              Ногти отрастают? А хочется норм выглядеть??!
              <p>
                Закажи маникюр и я отпилю тебе лишнее, дорощу нехватающее, будешь,
                наконец, норм выглядеть и чувствовать себя уверенее!
              </p>
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton color="#001515" rounded>
                Записаться!
              </MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceImage primary imgSource={'red'} />
          </ServiceSectionItem>
        </ServiceSection>
      </ServiceSectionContainer>

      <ServiceSectionContainer bgColor="#f1f2b4" color="#001515">
        <ServiceSection>
          <ServiceSectionItem>
            <SectionHeading>Записаться ко мне</SectionHeading>
            <SectionDescription>
              Заполните форму. Я свяжусь с Вами в течение 24 часов.
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton color="#001515" rounded>
                Записаться!
              </MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceForm />
          </ServiceSectionItem>
        </ServiceSection>
      </ServiceSectionContainer>
    </>
  );
};

export default Services;
