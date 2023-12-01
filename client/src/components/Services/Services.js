import {
  SectionButtonContainer,
  SectionDescription,
  SectionHeading,
  ServiceImage,
  ServiceSection,
  SectionContainer,
  ServiceSectionItem
} from './styles';
import { MyButton, PageHeading } from '../common/styles';
import ManicureImg from '../../images/IMG_8937.jpeg';
import ServiceForm from './ServiceForm/ServiceForm';

const Services = () => {
  return (
    <>
      <PageHeading>Services</PageHeading>

      <SectionContainer>
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
      </SectionContainer>

      <SectionContainer bgColor="#bef1f1" color="#001515">
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
      </SectionContainer>

      <ServiceForm />
    </>
  );
};

export default Services;
