import OpenAI from 'openai';
import { OPPENAI_KEY } from './constant';

const openAI = new OpenAI({
  apiKey: OPPENAI_KEY, dangerouslyAllowBrowser: true
});

export default openAI;