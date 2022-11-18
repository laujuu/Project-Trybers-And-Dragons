import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(
    name: string, 
    dexterity: number,
    maxLifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling._raceInstance += 1;
    this._maxLifePoints = maxLifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._raceInstance;
  }
}