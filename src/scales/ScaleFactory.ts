import { scalesRegistry } from './ScaleRegistry';

export class ScaleFactory {
  static create(name: keyof typeof scalesRegistry) {
    const ScaleClass = scalesRegistry[name];
    return new ScaleClass();
  }

  static getAll(): Array<{
    id: keyof typeof scalesRegistry;
    label: string;
  }> {
    return Object.entries(scalesRegistry).map(([id, Ctor]) => ({
      id: id as keyof typeof scalesRegistry,
      label: Ctor.label,
    }));
  }
}
