import { LoaderBody, LoaderWrapper } from './styles';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderBody>
        <span className="loader" />
      </LoaderBody>
    </LoaderWrapper>
  );
};

export default Loader;
