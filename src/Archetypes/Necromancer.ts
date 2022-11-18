import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energy: EnergyType;
  private static _archeTypeInstance = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._archeTypeInstance += 1;
    this._energy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._archeTypeInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}