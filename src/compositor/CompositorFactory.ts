import { CompositorInterface } from './CompositorInterface';
import { RandomSimpleCompositor } from './RandomSimpleCompositor';
import { SimpleDownArpegeCompositor } from './SimpleDownArpeggioCompositor';

export type Compositors = 'RANDOM_SIMPLE' | 'SIMPLE_DOWN_ARPEGGIO';
export class CompositorFactory {
  static create(compositor: Compositors | undefined): CompositorInterface {
    switch (compositor) {
      case 'RANDOM_SIMPLE':
        return new RandomSimpleCompositor();
      case 'SIMPLE_DOWN_ARPEGGIO':
        return new SimpleDownArpegeCompositor();
      default:
        return new RandomSimpleCompositor();
    }
  }
}
