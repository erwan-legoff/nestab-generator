import { scalesRegistry } from './ScaleRegistry';

export class ScaleFactory {
  static getScale(name: keyof typeof scalesRegistry) {
    const ScaleClass = scalesRegistry[name];
    return new ScaleClass();
  }

  static getAllScales(): Array<{
    id: keyof typeof scalesRegistry;
    label: string;
  }> {
    return Object.entries(scalesRegistry).map(([id, Ctor]) => ({
      id: id as keyof typeof scalesRegistry,
      label: Ctor.label,
    }));
  }
}
