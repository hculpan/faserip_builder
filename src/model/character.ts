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

    Powers: [
        {Name: string,
        Cost: number,
        Rating: number}
    ]

    constructor(points: number) {
        this.OriginalPoints = points;
        this.PointsSpent = 0;
    }

    BalancePoints() {
        this.PointsSpent = this.Fighting + this.Agility + 
            this.Strength + this.Endurance + this.Reason +
            this.Intuition + this.Psyche

        this.Health = this.Fighting + this.Agility + this.Strength + this.Endurance
        this.Karma = this.Reason + this.Intuition + this.Psyche
    }
}