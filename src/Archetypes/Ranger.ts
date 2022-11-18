import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  private static _archeTypeInstance = 0;

  constructor(
    name: string,
  ) {
    super(name);
    Ranger._archeTypeInstance += 1;
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._archeTypeInstance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}