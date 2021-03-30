import { PowerDefinition } from "src/app/service/powers.service"

export class Character {
    OriginalPoints: number = 0
    PointsSpent: number = 0

    Fighting: number = 0
    Agility: number = 0
    Strength: number = 0
    Endurance: number = 0
    Reason: number = 0
    Intuition: number = 0
    Psyche: number = 0

    Health: number = 0
    Karma: number = 0

    Name: string = ""

    Powers: {
        Name: string,
        BaseCost: number,
        Multiplier: number,
        Description: string,
        Rating: number,
        RatingDescriptor: string
    }[]

    constructor(points: number) {
        this.OriginalPoints = points;
        this.PointsSpent = 0;
        this.Powers = [
        ]
    }

    HasPower(name: string) : boolean {
        if (this.Powers == undefined || this.Powers.length == 0) {
            return false;
        }
        
        for (let i = 0; i < this.Powers.length; i++) {
            if (this.Powers[i].Name === name) {
                return true;
            }
        }

        return false;
    }

    AddNewPower(power: PowerDefinition) : boolean {
        if (!this.HasPower(power.name)) {
            let pwr = {
                Name: power.name,
                BaseCost: power.basecost,
                Multiplier: power.multiplier,
                Description: '',
                Rating: 0,
                RatingDescriptor: 'Shift 0'
            }
            this.Powers.push(pwr)
            this.BalancePoints()
            return true
        }
        return false
    }

    BalancePoints() {
        this.PointsSpent = this.Fighting + this.Agility + 
            this.Strength + this.Endurance + this.Reason +
            this.Intuition + this.Psyche

        for (let i = 0; i < this.Powers.length; i++) {
            this.PointsSpent += this.Powers[i].BaseCost + (this.Powers[i].Multiplier * this.Powers[i].Rating)
        }

        this.Health = this.Fighting + this.Agility + this.Strength + this.Endurance
        this.Karma = this.Reason + this.Intuition + this.Psyche
    }
}