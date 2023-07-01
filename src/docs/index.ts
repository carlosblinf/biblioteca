import basicInfo from './basicInfo';
import components from './components';
import routes from './routes';
import servers from './servers';
import tags from './tags';

export default {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...routes,
};
