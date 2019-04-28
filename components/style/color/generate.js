import { generate } from '@ant-design/colors';

export default function ColorPatterns(color, index) {
  index--;
  return generate(color)[index];
}
