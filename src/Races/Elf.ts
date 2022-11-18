import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(
    name: string, 
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    Elf._raceInstance += 1;
    this._maxLifePoints = maxLifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._raceInstance;
  }
}